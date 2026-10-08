import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import ProductCard from "../components/boutique/ProductCard";
import {
  categories,
  products,
  type ProductCategory,
} from "../data/products";
import BoutiqueContact from "../components/boutique/BoutiqueContact";


type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "newest";

const Boutique = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<
    ProductCategory | "Tous"
  >("Tous");
  const [sort, setSort] =
    useState<SortOption>("default");

  const filteredProducts = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch =
        normalizedSearch === "" ||
        product.nom
          .toLowerCase()
          .includes(normalizedSearch) ||
        product.marque
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        category === "Tous" ||
        product.categorie === category;

      return matchesSearch && matchesCategory;
    });

    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.prix - b.prix;

        case "price-desc":
          return b.prix - a.prix;

        case "newest":
          return (
            Number(b.badge === "Nouveau") -
            Number(a.badge === "Nouveau")
          );

        default:
          return 0;
      }
    });
  }, [search, category, sort]);

  const hasActiveFilters =
    search.trim() !== "" ||
    category !== "Tous" ||
    sort !== "default";

  const resetFilters = () => {
    setSearch("");
    setCategory("Tous");
    setSort("default");
  };
    const heroImages = [
    "hero1.webp",
    "hero2.webp",
    "hero3.webp",
  ];

  const [currentHeroImage, setCurrentHeroImage] =
    useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHeroImage((current) =>
        (current + 1) % heroImages.length
      );
    }, 6000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-teal-50/30 to-white">
      {/* =====================================================
    HERO
====================================================== */}
<section className="relative min-h-[620px] overflow-hidden bg-neutral-950 sm:min-h-[650px]">

  {/* IMAGE HERO */}
  <div className="absolute inset-0">
    {heroImages.map((image, index) => (
      <img
        key={image}
        src={image}
        alt={`MC Kaej Bootball - ${index + 1}`}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          currentHeroImage === index
            ? "opacity-100"
            : "opacity-0"
        }`}
      />
    ))}

    {/* Overlay sombre pour garder le texte lisible */}
    <div className="absolute inset-0 bg-neutral-950/65" />

    {/* Overlay sarcelle */}
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-teal-950/50" />

    {/* Fondu vers le bas */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950/80 to-transparent" />
  </div>

  {/* Grille discrète */}
  <div
    className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_70%)]"
    aria-hidden="true"
  />

  {/* Décoration */}
  <div className="pointer-events-none absolute -right-32 -top-32 z-10 h-96 w-96 rounded-full bg-teal-500/25 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-40 left-1/3 z-10 h-96 w-96 rounded-full bg-red-600/10 blur-3xl" />

  {/* CONTENU */}
  <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:min-h-[650px] sm:px-6 sm:py-24 lg:px-8 lg:py-28">

    <div className="max-w-3xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-red-300 shadow-lg shadow-red-900/20 backdrop-blur-md">
        <Sparkles size={14} />
        Varotra Godas vrai Madagascar 🇲🇬🇲🇬🇲🇬
      </div>

      {/* Titre */}
      <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        MC Kaej{" "}
        <span className="bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500 bg-clip-text text-transparent">
          Bootball
        </span>
      </h1>

      {/* Trait d'accent */}
      <span
        className="mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-teal-400 to-red-500"
        aria-hidden="true"
      />

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-gray-200 sm:text-lg">
        Passionné de football ou responsable de club ?
        Équipez-vous comme un pro avec ce matériel de
        football de haute qualité, idéal pour
        l'entraînement, les matchs ou le loisir.
      </p>

      {/* Indicateurs */}
      <div className="mt-8 flex flex-wrap items-center gap-3">

        <span className="rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-teal-900/40 ring-1 ring-white/20">
          {products.length} produits
        </span>

        <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-100 backdrop-blur-md">
          Commande simple via WhatsApp 0385857955
        </span>

      </div>

    </div>
  </div>

  {/* INDICATEURS DES 3 IMAGES */}
  <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">

    {heroImages.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrentHeroImage(index)}
        aria-label={`Afficher l'image ${index + 1}`}
        className={`h-2.5 rounded-full transition-all duration-500 ${
          currentHeroImage === index
            ? "w-8 bg-red-500 shadow-lg shadow-red-500/40"
            : "w-2.5 bg-white/50 hover:bg-white"
        }`}
      />
    ))}

  </div>

  {/* Séparateur */}
  <div className="absolute bottom-0 left-0 z-30 h-px w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

</section>

      {/* =====================================================
          BOUTIQUE
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Titre de section */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.25em] text-teal-700">
            <span
              className="h-0.5 w-8 rounded-full bg-gradient-to-r from-teal-600 to-red-500"
              aria-hidden="true"
            />
            Notre sélection
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
            Trouvez vos produits favoris
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            Recherchez, filtrez et choisissez facilement
            les produits qui correspondent à vos besoins.
          </p>
        </div>

        {/* =================================================
            RECHERCHE + TRI
        ================================================== */}
        {/* =================================================
    FILTRES STICKY
================================================= */}
<div className="sticky top-0 z-40 -mx-4 mt-8 bg-white/95 px-4 py-3 backdrop-blur-md sm:static sm:mx-0 sm:mt-10 sm:bg-transparent sm:px-0 sm:py-0">
  <div className="flex flex-col gap-3 rounded-2xl border border-teal-100 bg-white p-3 shadow-xl shadow-teal-900/5 ring-1 ring-black/[0.02] sm:rounded-3xl sm:p-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Recherche */}
            <div className="relative w-full lg:max-w-2xl">
              <Search
                size={20}
                strokeWidth={2}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-teal-600"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Rechercher un produit ou une marque..."
                aria-label="Rechercher un produit ou une marque"
                className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50/60 pl-12 pr-12 text-sm font-medium text-neutral-950 outline-none transition duration-300 placeholder:text-gray-400 hover:border-teal-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Effacer la recherche"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Tri */}
            <div className="flex w-full items-center gap-3 lg:w-auto">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                <SlidersHorizontal
                  size={18}
                  className="shrink-0"
                />
              </span>

              <select
                value={sort}
                onChange={(event) =>
                  setSort(
                    event.target.value as SortOption
                  )
                }
                aria-label="Trier les produits"
                className="h-12 w-full rounded-2xl border border-gray-200 bg-gray-50/60 px-4 text-sm font-semibold text-neutral-950 outline-none transition hover:border-teal-200 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-100 lg:w-56"
              >
                <option value="default">
                  Trier par défaut
                </option>

                <option value="price-asc">
                  Prix croissant
                </option>

                <option value="price-desc">
                  Prix décroissant
                </option>

                <option value="newest">
                  Nouveautés
                </option>
              </select>
            </div>
          </div>
        </div>

       {/* =================================================
    CATÉGORIES
================================================== */}
<div className="sticky top-0 z-30 -mx-4 mt-3 border-b border-teal-100 bg-white/95 px-4 py-3 backdrop-blur-md sm:static sm:mx-0 sm:mt-8 sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-none">
  <div className="mb-3 flex items-center justify-between">
    <p className="text-sm font-bold text-neutral-950">
      Catégories
    </p>

    {hasActiveFilters && (
      <button
        type="button"
        onClick={resetFilters}
        className="rounded-full px-3 py-1 text-xs font-bold text-red-600 transition hover:bg-red-50 hover:text-red-700"
      >
        Réinitialiser
      </button>
    )}
  </div>

  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
    {/* Tous */}
    <button
      type="button"
      onClick={() => setCategory("Tous")}
      className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${
        category === "Tous"
          ? "bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg shadow-teal-600/30 ring-1 ring-teal-500/50"
          : "border border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
      }`}
    >
      Tous
    </button>

    {/* Catégories */}
    {categories.map((item) => (
      <button
        key={item}
        type="button"
        onClick={() => setCategory(item)}
        className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${
          category === item
            ? "bg-gradient-to-r from-teal-700 to-teal-600 text-white shadow-lg shadow-teal-600/30 ring-1 ring-teal-500/50"
            : "border border-gray-200 bg-white text-gray-600 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
        }`}
      >
        {item}
      </button>
    ))}
  </div>
</div>

        {/* =================================================
            RÉSULTATS
        ================================================== */}
        <div className="mt-10 flex flex-col gap-3 border-b border-teal-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-teal-700">
              Collection ROSA
            </p>

            <h2 className="mt-1 text-2xl font-black tracking-tight text-neutral-950">
              {category === "Tous"
                ? "Nos produits"
                : category}
            </h2>
          </div>

          <p className="inline-flex w-fit items-center rounded-full border border-teal-100 bg-teal-50/60 px-4 py-1.5 text-sm font-medium text-gray-600">
            <span className="mr-1 font-bold text-teal-700">
              {filteredProducts.length}
            </span>{" "}
            produit
            {filteredProducts.length > 1
              ? "s"
              : ""}{" "}
            trouvé
            {filteredProducts.length > 1
              ? "s"
              : ""}
          </p>
        </div>

        {/* =================================================
            GRILLE PRODUITS
        ================================================== */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map(
              (product, index) => (
                <div
                  key={product.id}
                  className="animate-[fadeIn_0.5s_ease-out_both]"
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  <ProductCard product={product} />
                </div>
              )
            )}
          </div>
        ) : (
          /* =================================================
             EMPTY STATE
          ================================================== */
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-dashed border-teal-300 bg-gradient-to-b from-teal-50/60 to-white px-6 py-20 text-center">
            <div
              className="pointer-events-none absolute left-1/2 -top-16 h-44 w-44 -translate-x-1/2 rounded-full bg-teal-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-teal-800 shadow-xl shadow-teal-700/25 ring-8 ring-teal-50">
              <Search
                size={32}
                className="text-white"
              />
            </div>

            <h3 className="relative mt-6 text-xl font-black text-neutral-950 sm:text-2xl">
              Aucun produit trouvé
            </h3>

            <p className="relative mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
              Aucun produit ne correspond à votre
              recherche actuelle. Essayez un autre
              mot-clé ou une autre catégorie.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="relative mt-7 rounded-2xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 focus:outline-none focus:ring-4 focus:ring-red-200"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* =================================================
            BAS DE SECTION
        ================================================== */}
        {filteredProducts.length > 0 && (
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-teal-950 px-6 py-10 text-center shadow-2xl shadow-teal-950/30 ring-1 ring-white/10 sm:px-10">
            {/* Halos décoratifs */}
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-red-600/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg shadow-teal-600/40 ring-4 ring-teal-500/20">
                <Sparkles size={22} />
              </div>

              <h3 className="mt-5 text-2xl font-black text-white">
                Besoin d'aide pour choisir ?
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-300">
                Notre équipe est disponible pour vous
                accompagner dans le choix de vos produits
                beauté.
              </p>

              <p className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/30">
                Commandez simplement via WhatsApp
              </p>
            </div>
          </div>
        )}
      </section>
      {/* =====================================================
    CONTACT / BOUTIQUE
====================================================== */}
<div className="mt-16">
  <BoutiqueContact />
</div>
    </main>
  );
};

export default Boutique;