
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import ProductCard from "../components/boutique/ProductCard";
import {
  categories,
  products,
  type ProductCategory,
} from "../data/products";

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

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-black">
        {/* Décoration */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-600/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-400">
              <Sparkles size={14} />
              Beauté • Style • Élégance
            </div>

            {/* Titre */}
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              ROSA{" "}
              <span className="text-yellow-400">
                Boutique
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Découvrez notre sélection de produits
              beauté, soins, coiffage, maquillage et
              accessoires soigneusement sélectionnés
              pour votre routine.
            </p>

            {/* Petit indicateur */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white">
                {products.length} produits
              </span>

              <span className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-gray-300">
                Commande simple via WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </section>

      {/* =====================================================
          BOUTIQUE
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Titre de section */}
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
            Notre sélection
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-black sm:text-4xl">
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
        <div className="mt-10 rounded-3xl border border-gray-100 bg-gray-50 p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Recherche */}
            <div className="relative w-full lg:max-w-2xl">
              <Search
                size={20}
                strokeWidth={2}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-600"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Rechercher un produit ou une marque..."
                aria-label="Rechercher un produit ou une marque"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-12 text-sm font-medium text-black outline-none transition duration-300 placeholder:text-gray-400 hover:border-gray-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Effacer la recherche"
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition hover:bg-violet-50 hover:text-violet-600"
                >
                  <X size={17} />
                </button>
              )}
            </div>

            {/* Tri */}
            <div className="flex w-full items-center gap-3 lg:w-auto">
              <SlidersHorizontal
                size={18}
                className="shrink-0 text-violet-600"
              />

              <select
                value={sort}
                onChange={(event) =>
                  setSort(
                    event.target.value as SortOption
                  )
                }
                aria-label="Trier les produits"
                className="h-13 w-full rounded-2xl border border-gray-200 bg-white px-4 text-sm font-semibold text-black outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100 lg:w-56"
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
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold text-black">
              Catégories
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-bold text-violet-600 transition hover:text-violet-800"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {/* Tous */}
            <button
              type="button"
              onClick={() => setCategory("Tous")}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition duration-300 ${
                category === "Tous"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
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
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
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
        <div className="mt-10 flex flex-col gap-3 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-violet-600">
              Collection ROSA
            </p>

            <h2 className="mt-1 text-2xl font-black text-black">
              {category === "Tous"
                ? "Nos produits"
                : category}
            </h2>
          </div>

          <p className="text-sm font-medium text-gray-500">
            <span className="font-bold text-black">
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
          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 px-6 py-20 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100">
              <Search
                size={32}
                className="text-violet-600"
              />
            </div>

            <h3 className="mt-6 text-xl font-black text-black sm:text-2xl">
              Aucun produit trouvé
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
              Aucun produit ne correspond à votre
              recherche actuelle. Essayez un autre
              mot-clé ou une autre catégorie.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-7 rounded-2xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* =================================================
            BAS DE SECTION
        ================================================== */}
        {filteredProducts.length > 0 && (
          <div className="mt-16 overflow-hidden rounded-3xl bg-black px-6 py-10 text-center sm:px-10">
            <div className="mx-auto max-w-2xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white">
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

              <p className="mt-5 text-sm font-bold text-yellow-400">
                Commandez simplement via WhatsApp
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Boutique;

