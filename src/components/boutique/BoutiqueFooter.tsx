import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
} from "lucide-react";

const BoutiqueFooter = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600">
                <ShoppingBag size={21} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  ROSA
                </p>

                <p className="text-xl font-black">
                  Boutique
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Découvrez notre sélection de produits beauté,
              soins, coiffage, maquillage et accessoires.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Boutique
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/boutique"
                  className="transition hover:text-white"
                >
                  Tous les produits
                </a>
              </li>

              <li>
                <a
                  href="/boutique"
                  className="transition hover:text-white"
                >
                  Nouveautés
                </a>
              </li>

              <li>
                <a
                  href="/boutique"
                  className="transition hover:text-white"
                >
                  Produits populaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-violet-400"
                />

                <span>
                  Antananarivo, Madagascar
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-violet-400"
                />

                <a
                  href="tel:+261378911098"
                  className="transition hover:text-white"
                >
                  +261 37 89 110 98
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle
                  size={18}
                  className="shrink-0 text-violet-400"
                />

                <a
                  href="https://wa.me/261378911098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              Horaires
            </h3>

            <div className="mt-5 flex items-start gap-3 text-sm text-gray-400">
              <Clock3
                size={18}
                className="mt-0.5 shrink-0 text-violet-400"
              />

              <div>
                <p className="text-white">
                  Lundi — Vendredi
                </p>

                <p className="mt-1">
                  09:00 — 18:00
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs leading-5 text-gray-500">
              Pour vérifier la disponibilité d'un produit
              ou passer une commande, contactez-nous
              directement sur WhatsApp.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ROSA Boutique.
            Tous droits réservés.
          </p>

          <p>
            Commandes directement via WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BoutiqueFooter;