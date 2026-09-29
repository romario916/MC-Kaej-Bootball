
import { Check, ShoppingCart, X } from "lucide-react";

interface CartToastProps {
  productName: string;
  color?: string;
  onViewCart: () => void;
  onClose: () => void;
}

const CartToast = ({
  productName,
  color,
  onViewCart,
  onClose,
}: CartToastProps) => {
  return (
    <div className="fixed bottom-5 right-5 z-[100] w-[calc(100%-2rem)] max-w-sm animate-in slide-in-from-right-5 fade-in duration-300">
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        <div className="flex items-start gap-3 border-l-4 border-violet-600 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100">
            <Check
              size={20}
              className="text-violet-700"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <ShoppingCart
                size={15}
                className="text-violet-600"
              />

              <p className="text-sm font-bold text-black">
                Produit ajouté au panier
              </p>
            </div>

            <p className="mt-1 truncate text-sm text-gray-600">
              {productName}
            </p>

            {color && (
              <p className="mt-1 text-xs font-semibold text-violet-600">
                Couleur : {color}
              </p>
            )}

            <button
              type="button"
              onClick={onViewCart}
              className="mt-3 text-sm font-bold text-violet-700 transition hover:text-violet-900"
            >
              Voir le panier →
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer la notification"
            className="shrink-0 rounded-lg p-1 text-gray-400 transition hover:bg-gray-100 hover:text-black"
          >
            <X size={17} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartToast;

