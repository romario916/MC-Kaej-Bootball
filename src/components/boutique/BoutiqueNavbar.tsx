import { Store } from "lucide-react";
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";

interface BoutiqueNavbarProps {
  onCartClick: () => void;
}

const BoutiqueNavbar = ({
  onCartClick,
}: BoutiqueNavbarProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black text-white shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/boutique"
          className="flex min-w-0 items-center gap-3"
          aria-label="Retour à ROSA Boutique"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600">
            <Store size={21} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
              ROSA
            </p>

            <p className="truncate text-base font-black sm:text-lg">
              Boutique
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/boutique"
            className="relative text-sm font-semibold text-white transition hover:text-yellow-400"
          >
            Boutique

            <span className="absolute -bottom-2 left-0 h-0.5 w-full scale-x-0 bg-yellow-400 transition-transform duration-300 hover:scale-x-100" />
          </Link>
        </nav>

        <div className="shrink-0">
          <CartIcon onClick={onCartClick} />
        </div>
      </div>
    </header>
  );
};

export default BoutiqueNavbar;