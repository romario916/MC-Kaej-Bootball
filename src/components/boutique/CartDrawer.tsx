
import { useEffect, useState } from "react";
import { ShoppingBag, Trash2, X } from "lucide-react";

import { useCart } from "../../context/CartContext";
import {
  getCartOrderMessage,
  openWhatsApp,
} from "../../utils/whatsapp";
import QuantitySelector from "./QuantitySelector";
import OrderCustomerForm, {
  type CustomerInfo,
} from "./OrderCustomerForm";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
}: CartDrawerProps) => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [showCustomerForm, setShowCustomerForm] =
    useState(false);

  // Gestion de Escape + blocage du scroll
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  // Réinitialiser le formulaire quand le panier devient vide
  useEffect(() => {
    if (items.length === 0) {
      setShowCustomerForm(false);
    }
  }, [items.length]);

  const formatPrice = (price: number) => {
    return `${price.toLocaleString("fr-FR")} Ar`;
  };

  const handleWhatsAppOrder = (
    customer: CustomerInfo
  ) => {
    if (items.length === 0) {
      return;
    }

    const message = getCartOrderMessage(
      items,
      totalPrice,
      customer
    );

    openWhatsApp(message);
  };

  const handleClearCart = () => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment vider votre panier ?"
    );

    if (confirmed) {
      clearCart();
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Panier ROSA Boutique"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md transform flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between bg-black px-5 py-5 text-white">
          <div>
            <p className="text-sm font-medium bg-gradient-to-r from-teal-300">
              MC Kaej Bootball
            </p>

            <h2 className="text-lg font-bold">
              {showCustomerForm
                ? "Informations de commande"
                : "Votre panier"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le panier"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <X size={22} />
          </button>
        </header>

        {/* Formulaire client */}
        {showCustomerForm && items.length > 0 ? (
          <div className="min-h-0 flex-1 overflow-y-auto">
            <OrderCustomerForm
              onSubmit={handleWhatsAppOrder}
              onCancel={() =>
                setShowCustomerForm(false)
              }
            />
          </div>
        ) : (
          <>
            {/* Contenu du panier */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-violet-50">
                    <ShoppingBag
                      size={34}
                      className="text-violet-600"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-black">
                    Votre panier est vide
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                    Découvrez nos produits beauté et
                    ajoutez vos favoris à votre panier.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold bg-gradient-to-r from-teal-300 transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
                  >
                    Découvrir la boutique
                  </button>
                </div>
              ) : (
                <div className="space-y-4 p-5">
                  {items.map((item) => {
                    const subtotal =
                      item.prix * item.quantite;

                    const itemKey = item.couleur
                      ? `${item.id}-${item.couleur}`
                      : item.id;

                    return (
                      <article
                        key={itemKey}
                        className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition hover:shadow-md"
                      >
                        <div className="flex gap-3">
                          {/* Image */}
                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.nom}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          {/* Informations */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <h3 className="line-clamp-2 text-sm font-bold text-black">
                                  {item.nom}
                                </h3>

                                <p className="mt-1 text-xs text-gray-500">
                                  {item.marque}
                                </p>

                                {item.couleur && (
                                  <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs font-medium text-gray-500">
                                      Couleur :
                                    </span>

                                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-bold text-violet-700">
                                      {item.couleur}
                                    </span>
                                  </div>
                                )}

                                <p className="mt-2 text-xs font-medium text-gray-500">
                                  {formatPrice(item.prix)}{" "}
                                  / unité
                                </p>
                              </div>

                              {/* Supprimer */}
                              <button
                                type="button"
                                onClick={() =>
                                  removeFromCart(
                                    item.id,
                                    item.couleur
                                  )
                                }
                                aria-label={`Supprimer ${item.nom}${item.couleur ? ` couleur ${item.couleur}` : ""}`}
                                className="shrink-0 rounded-lg p-1 text-gray-400 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-200"
                              >
                                <Trash2 size={17} />
                              </button>
                            </div>

                            {/* Quantité + sous-total */}
                            <div className="mt-3 flex items-center justify-between gap-2">
                              <QuantitySelector
                                quantity={
                                  item.quantite
                                }
                                onDecrease={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantite - 1,
                                    item.couleur
                                  )
                                }
                                onIncrease={() =>
                                  updateQuantity(
                                    item.id,
                                    item.quantite + 1,
                                    item.couleur
                                  )
                                }
                              />

                              <p className="text-sm font-bold text-violet-700">
                                {formatPrice(
                                  subtotal
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <footer className="shrink-0 border-t border-white/10 bg-black p-5 text-white">
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-400">
                      {totalItems} article
                      {totalItems > 1
                        ? "s"
                        : ""}
                    </p>

                    <p className="mt-1 text-lg font-bold">
                      Total général
                    </p>
                  </div>

                  <p className="text-xl font-black text-yellow-400">
                    {formatPrice(totalPrice)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowCustomerForm(true)
                  }
                  className="w-full rounded-xl bg-violet-600 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-300"
                >
                  Commander via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleClearCart}
                  className="mt-3 w-full rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-gray-300 transition hover:border-white/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  Vider le panier
                </button>
              </footer>
            )}
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;

