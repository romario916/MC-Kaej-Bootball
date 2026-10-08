import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  
} from "lucide-react";

const BoutiqueFooter = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-neutral-950 text-white">
      {/* Fond : dégradé profond */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-neutral-900 to-teal-950"
        aria-hidden="true"
      />

      {/* Grille discrète en filigrane */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos lumineux */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-red-600/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Ligne lumineuse en haut */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-gradient-to-r from-transparent via-red-500 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marque */}
          <div>
            <div className="group flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-neutral-900 ring-2 ring-teal-500/60 ring-offset-2 ring-offset-neutral-950 transition-all duration-300 group-hover:ring-teal-400 group-hover:shadow-lg group-hover:shadow-teal-500/30">
            <img
              src="/logo.webp"
              alt="Photo de la boutique"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
                  MC Kaej
                </p>

                <p className="text-xl font-black tracking-tight">
                  Bootbal
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
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Boutique
            </h3>

            <span
              className="mt-3 block h-1 w-8 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
              aria-hidden="true"
            />

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="/boutique"
                  className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span
                    className="h-px w-0 bg-gradient-to-r from-teal-400 to-red-500 transition-all duration-300 group-hover:w-4"
                    aria-hidden="true"
                  />
                  Tous les produits
                </a>
              </li>

              <li>
                <a
                  href="/boutique"
                  className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span
                    className="h-px w-0 bg-gradient-to-r from-teal-400 to-red-500 transition-all duration-300 group-hover:w-4"
                    aria-hidden="true"
                  />
                  Nouveautés
                </a>
              </li>

              <li>
                <a
                  href="/boutique"
                  className="group inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  <span
                    className="h-px w-0 bg-gradient-to-r from-teal-400 to-red-500 transition-all duration-300 group-hover:w-4"
                    aria-hidden="true"
                  />
                  Produits populaires
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Contact
            </h3>

            <span
              className="mt-3 block h-1 w-8 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
              aria-hidden="true"
            />

            <div className="mt-5 space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal-400">
                  <MapPin size={18} />
                </span>

                <span className="pt-2">
                  Antananarivo, Madagascar
                </span>
              </div>

              <div className="group flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal-400 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-teal-700 group-hover:text-white">
                  <Phone size={18} />
                </span>

                <a
                  href="tel:+261378911098"
                  className="transition hover:text-white"
                >
                  +261 38 58 579 55
                </a>
              </div>

              <div className="group flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal-400 transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-700 group-hover:text-white">
                  <MessageCircle size={18} />
                </span>

                <a
                  href="https://wa.me/261385857955"
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
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">
              Horaires
            </h3>

            <span
              className="mt-3 block h-1 w-8 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
              aria-hidden="true"
            />

            <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-400 backdrop-blur-md">
              <span
                className="absolute inset-y-3 left-0 w-1 rounded-full bg-teal-400"
                aria-hidden="true"
              />

              <div className="flex items-start gap-3 pl-2">
                <Clock3
                  size={18}
                  className="mt-0.5 shrink-0 text-teal-400"
                />

                <div>
                  <p className="font-semibold text-white">
                    Lundi — Samedi
                  </p>

                  <p className="mt-1">
                    08:00 — 18:00
                  </p>
                </div>
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
        <div className="relative mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
            aria-hidden="true"
          />

          <p>
            © {new Date().getFullYear()} MC Kaej Bootball.
            Tous droits réservés.
          </p>

          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-red-500/30 bg-red-600/10 px-4 py-1.5 text-xs font-semibold text-red-200">
            <span
              className="relative flex h-2 w-2"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            RAKOTOVAO Henry Romario Développeur Web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BoutiqueFooter;