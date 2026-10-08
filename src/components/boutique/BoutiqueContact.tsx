import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const boutiqueInfo = {
  whatsapp: "261385857955",
  telephone: "+261 38 58 579 55",
  facebook: "https://www.facebook.com/profile.php?id=61553124067745&sk=photos",
  localisation: "https://maps.app.goo.gl/cCqtVucUUma22BsH9",
  image: "/hero1.webp",
  horaires: "Lundi - Samedi : 08h00 - 18h00",
};

const BoutiqueContact = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-teal-950 shadow-2xl shadow-teal-950/30 ring-1 ring-white/10">
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[280px] lg:min-h-[460px]">
          <img
            src={boutiqueInfo.image}
            alt="Notre boutique"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-neutral-950/60 max-lg:hidden" />

          {/* Liseré d'accent */}
          <div
            className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-400 via-teal-500 to-red-500"
            aria-hidden="true"
          />

          <div className="absolute bottom-6 left-6 right-6">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
              <span
                className="h-0.5 w-8 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
                aria-hidden="true"
              />
              Notre boutique
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Venez découvrir nos produits
            </h2>
          </div>
        </div>

        {/* Informations */}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-teal-400">
            Contact & informations
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Une question sur un produit ?
          </h2>

          <span
            className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
            aria-hidden="true"
          />

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Contactez-nous directement pour obtenir des informations,
            vérifier la disponibilité d'un produit ou passer votre commande.
          </p>

          {/* Horaires */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <span
              className="absolute inset-y-3 left-0 w-1 rounded-full bg-teal-400"
              aria-hidden="true"
            />

            <p className="pl-2 text-sm font-bold text-white">
              Horaires
            </p>

            <p className="mt-1 pl-2 text-sm text-gray-400">
              {boutiqueInfo.horaires}
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`https://wa.me/${boutiqueInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              href={`tel:${boutiqueInfo.telephone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-teal-500/40 bg-teal-500/10 px-4 py-3.5 text-sm font-bold text-teal-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-500 hover:text-white hover:shadow-lg hover:shadow-teal-500/30"
            >
              <Phone size={18} />
              Appeler
            </a>

            <a
              href={boutiqueInfo.localisation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:text-neutral-950 hover:shadow-lg hover:shadow-white/10"
            >
              <MapPin size={18} />
              Localisation
            </a>

            <a
              href={boutiqueInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:text-neutral-950 hover:shadow-lg hover:shadow-white/10"
            >
              <ExternalLink size={18} />
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoutiqueContact;