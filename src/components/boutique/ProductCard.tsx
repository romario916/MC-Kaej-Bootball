import {
  Check,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import type {
  Product,
  ProductColor,
} from "../../data/products";
import { useCart } from "../../context/CartContext";
import ProductBadge from "./ProductBadge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({
  product,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const hasColors =
    Array.isArray(product.couleurs) &&
    product.couleurs.length > 0;

  const [selectedColor, setSelectedColor] =
    useState<ProductColor | null>(
      hasColors && product.couleurs?.length === 1
        ? product.couleurs[0]
        : null
    );

  const [showColorError, setShowColorError] =
    useState(false);

  const formatPrice = (price: number) =>
    `${price.toLocaleString("fr-FR")} Ar`;

  const handleColorSelect = (
    color: ProductColor
  ) => {
    setSelectedColor(color);
    setShowColorError(false);
  };

  const handleAddToCart = () => {
  if (!product.disponible) {
    return;
  }

  const hasColors =
    Array.isArray(product.couleurs) &&
    product.couleurs.length > 0;

  if (hasColors && !selectedColor) {
    setShowColorError(true);
    return;
  }

  addToCart(
    {
      id: product.id,
      nom: product.nom,
      marque: product.marque,
      prix: product.prix,
      image: product.image,
      couleur: selectedColor?.nom,
    },
    1
  );

  setShowColorError(false);
};
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
      {/* IMAGE */}
      <Link
        to={`/boutique/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-gray-100"
      >
        <img
          src={product.image}
          alt={product.nom}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/5" />

        {product.badge && (
          <div className="absolute left-4 top-4">
            <ProductBadge
              badge={product.badge}
            />
          </div>
        )}

        {!product.disponible && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg">
              Indisponible
            </span>
          </div>
        )}
      </Link>

      {/* INFORMATIONS */}
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-violet-600">
          {product.marque}
        </p>

        <Link
          to={`/boutique/${product.id}`}
          className="mt-2 block"
        >
          <h3 className="line-clamp-2 min-h-12 text-base font-black leading-6 text-black transition duration-300 group-hover:text-violet-700">
            {product.nom}
          </h3>
        </Link>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.descriptionCourte}
        </p>

        {/* COULEURS */}
        {product.disponible && hasColors && (
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-black">
                Couleur
              </p>

              {selectedColor && (
                <span className="text-xs font-semibold text-violet-600">
                  {selectedColor.nom}
                </span>
              )}
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {product.couleurs!.map((color) => {
                const isSelected =
                  selectedColor?.nom === color.nom;

                return (
                  <button
                    key={color.nom}
                    type="button"
                    onClick={() =>
                      handleColorSelect(color)
                    }
                    title={color.nom}
                    aria-label={`Choisir la couleur ${color.nom}`}
                    aria-pressed={isSelected}
                    className={`relative h-8 w-8 rounded-full border-2 transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 ${
                      isSelected
                        ? "border-violet-600 ring-2 ring-violet-200"
                        : "border-white shadow-md ring-1 ring-gray-200"
                    }`}
                    style={{
                      backgroundColor: color.valeur,
                    }}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check
                          size={14}
                          strokeWidth={3}
                          className="text-white drop-shadow-md"
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {showColorError && (
              <p className="mt-2 text-xs font-semibold text-violet-600">
                Veuillez choisir une couleur.
              </p>
            )}
          </div>
        )}

        {/* PRIX + PANIER */}
        <div className="mt-6 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-gray-400">
              Prix
            </p>

            <p className="mt-1 text-lg font-black text-black">
              {formatPrice(product.prix)}
            </p>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.disponible}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none"
          >
            <ShoppingCart size={17} />

            <span>Ajouter</span>
          </button>
        </div>

        {/* DÉTAILS */}
        <Link
          to={`/boutique/${product.id}`}
          className="mt-4 block text-center text-xs font-bold text-gray-500 transition hover:text-violet-700"
        >
          Voir les détails →
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;