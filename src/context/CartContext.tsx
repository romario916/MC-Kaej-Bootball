
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";

export interface CartItem {
  id: string;
  nom: string;
  marque: string;
  prix: number;
  image: string;
  quantite: number;
  couleur?: string;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: CartItem;
    }
  | {
      type: "REMOVE_FROM_CART";
      payload: {
        id: string;
        couleur?: string;
      };
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: {
        id: string;
        couleur?: string;
        quantite: number;
      };
    }
  | {
      type: "CLEAR_CART";
    };

interface CartContextValue {
  items: CartItem[];

  addToCart: (
    item: Omit<CartItem, "quantite">,
    quantite?: number
  ) => void;

  removeFromCart: (
    id: string,
    couleur?: string
  ) => void;

  updateQuantity: (
    id: string,
    quantite: number,
    couleur?: string
  ) => void;

  clearCart: () => void;

  totalItems: number;

  totalPrice: number;
}

const STORAGE_KEY = "rosa_boutique_cart";

/**
 * Charger le panier directement au démarrage.
 * Cela évite le conflit entre le chargement et la sauvegarde
 * du localStorage, notamment avec React StrictMode.
 */
const getInitialState = (): CartState => {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);

    if (!savedCart) {
      return {
        items: [],
      };
    }

    const parsedCart: unknown = JSON.parse(savedCart);

    if (!Array.isArray(parsedCart)) {
      return {
        items: [],
      };
    }

    return {
      items: parsedCart,
    };
  } catch {
    console.warn(
      "Impossible de charger le panier depuis le stockage."
    );

    return {
      items: [],
    };
  }
};

const initialState = getInitialState();

/**
 * Vérifie si deux articles représentent exactement
 * le même produit et la même variante de couleur.
 */
const isSameProductVariant = (
  item: CartItem,
  id: string,
  couleur?: string
): boolean => {
  return (
    item.id === id &&
    item.couleur === couleur
  );
};

const cartReducer = (
  state: CartState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) =>
          isSameProductVariant(
            item,
            action.payload.id,
            action.payload.couleur
          )
      );

      /**
       * Le produit existe déjà avec la même couleur :
       * on augmente simplement la quantité.
       */
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            isSameProductVariant(
              item,
              action.payload.id,
              action.payload.couleur
            )
              ? {
                  ...item,
                  quantite:
                    item.quantite +
                    action.payload.quantite,
                }
              : item
          ),
        };
      }

      /**
       * Nouveau produit ou nouvelle couleur :
       * on ajoute une nouvelle ligne au panier.
       */
      return {
        items: [
          ...state.items,
          action.payload,
        ],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter(
          (item) =>
            !isSameProductVariant(
              item,
              action.payload.id,
              action.payload.couleur
            )
        ),
      };

    case "UPDATE_QUANTITY":
      return {
        items: state.items
          .map((item) =>
            isSameProductVariant(
              item,
              action.payload.id,
              action.payload.couleur
            )
              ? {
                  ...item,
                  quantite:
                    action.payload.quantite,
                }
              : item
          )
          .filter(
            (item) => item.quantite > 0
          ),
      };

    case "CLEAR_CART":
      return {
        items: [],
      };

    default:
      return state;
  }
};

const CartContext = createContext<
  CartContextValue | undefined
>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  /**
   * Sauvegarder le panier à chaque modification.
   *
   * Le panier est déjà chargé avant le premier rendu,
   * donc il n'y a plus de risque d'écraser le localStorage
   * avec un tableau vide.
   */
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.items)
      );
    } catch {
      console.warn(
        "Impossible de sauvegarder le panier."
      );
    }
  }, [state.items]);

  const addToCart = (
    item: Omit<CartItem, "quantite">,
    quantite = 1
  ): void => {
    if (quantite <= 0) {
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        quantite,
      },
    });
  };

  const removeFromCart = (
    id: string,
    couleur?: string
  ): void => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id,
        couleur,
      },
    });
  };

  const updateQuantity = (
    id: string,
    quantite: number,
    couleur?: string
  ): void => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id,
        quantite,
        couleur,
      },
    });
  };

  const clearCart = (): void => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const totalItems = state.items.reduce(
    (total, item) =>
      total + item.quantite,
    0
  );

  const totalPrice = state.items.reduce(
    (total, item) =>
      total +
      item.prix * item.quantite,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart doit être utilisé à l'intérieur de CartProvider."
    );
  }

  return context;
};

