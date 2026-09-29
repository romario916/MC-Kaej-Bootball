import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface CartIconProps {
  onClick: () => void;
}

const CartIcon = ({ onClick }: CartIconProps) => {
  const { totalItems } = useCart();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Ouvrir le panier${totalItems > 0 ? `, ${totalItems} article${totalItems > 1 ? "s" : ""}` : ""}`}
      className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white transition duration-300 hover:scale-105 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
    >
      <ShoppingCart size={21} />

      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-yellow-400 px-1.5 text-xs font-black text-black shadow-md">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;