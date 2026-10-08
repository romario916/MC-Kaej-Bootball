
import { Link } from "react-router-dom";

import CartIcon from "./CartIcon";

interface BoutiqueNavbarProps {
  onCartClick: () => void;
}

const BoutiqueNavbar = ({
  onCartClick,
}: BoutiqueNavbarProps) => {
  return (
    <header className="sticky top-0 z-30 bg-neutral-950/90 text-white shadow-xl shadow-black/30 backdrop-blur-xl fixed top-0 left-0 right-0 z-50">
      {/* Fine ligne lumineuse en haut */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-teal-700 via-teal-400 to-red-500"
        aria-hidden="true"
      />

      {/* Fine ligne dégradée en bas */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/boutique"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Retour à ROSA Boutique"
        >
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-neutral-900 ring-2 ring-teal-500/60 ring-offset-2 ring-offset-neutral-950 transition-all duration-300 group-hover:ring-teal-400 group-hover:shadow-lg group-hover:shadow-teal-500/30">
            <img
              src="/logo.webp"
              alt="Photo de la boutique"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-400 sm:text-xs">
              MC Kaej
            </p>

            <p className="truncate text-base font-black tracking-tight text-white sm:text-lg">
              Bootball
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/boutique"
            className="group relative rounded-full px-4 py-2 text-sm font-semibold text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-teal-300"
          >
            Boutique

            <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-teal-400 to-red-500 transition-transform duration-300 group-hover:scale-x-100" />
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