
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
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-2xl sm:rounded-3xl">
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

        {/* Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute left-2 top-2 sm:left-4 sm:top-4">
            <ProductBadge badge={product.badge} />
          </div>
        )}

        {/* Disponibilité */}
        {!product.disponible && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
            <span className="rounded-full border border-white/20 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-wider text-gray-950 shadow-xl sm:px-5 sm:py-2.5 sm:text-sm">
              Indisponible
            </span>
          </div>
        )}
      </Link>

      {/* INFORMATIONS */}
      <div className="p-3.5 sm:p-5">
        {/* Marque */}
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-teal-700 sm:text-xs">
          {product.marque}
        </p>

        {/* Nom */}
        <Link
          to={`/boutique/${product.id}`}
          className="mt-1.5 block sm:mt-2"
        >
          <h3 className="line-clamp-2 min-h-10 text-sm font-black leading-5 text-gray-950 transition duration-300 group-hover:text-teal-700 sm:min-h-12 sm:text-base sm:leading-6">
            {product.nom}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 min-h-8 text-xs leading-4 text-gray-500 sm:mt-2 sm:min-h-10 sm:text-sm sm:leading-5">
          {product.descriptionCourte}
        </p>

        {/* COULEURS */}
        {product.disponible && hasColors && (
          <div className="mt-4 rounded-xl border border-gray-100 bg-gray-50 p-3 sm:mt-5 sm:rounded-2xl">
            <div className="flex items-center justify-between gap-1">
              <p className="text-[10px] font-black uppercase tracking-wide text-gray-900 sm:text-xs">
                Couleur
              </p>

              {selectedColor && (
                <span className="max-w-[80px] truncate text-[10px] font-bold text-teal-700 sm:max-w-none sm:text-xs">
                  {selectedColor.nom}
                </span>
              )}
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2">
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
                    className={`relative h-7 w-7 rounded-full border-2 transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:h-8 sm:w-8 ${
                      isSelected
                        ? "border-teal-700 ring-2 ring-teal-200"
                        : "border-white shadow-md ring-1 ring-gray-200"
                    }`}
                    style={{
                      backgroundColor: color.valeur,
                    }}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check
                          size={12}
                          strokeWidth={3}
                          className="text-white drop-shadow-md sm:h-[14px] sm:w-[14px]"
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {showColorError && (
              <p className="mt-2 text-[10px] font-bold text-red-600 sm:text-xs">
                Veuillez choisir une couleur.
              </p>
            )}
          </div>
        )}

        {/* PRIX + PANIER */}
        <div className="mt-5 border-t border-gray-100 pt-4 sm:mt-6 sm:pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
                Prix
              </p>

              <p className="mt-0.5 text-base font-black tracking-tight text-red-600 sm:mt-1 sm:text-lg">
  {formatPrice(product.prix)}
</p>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!product.disponible}
              aria-label={`Ajouter ${product.nom} au panier`}
              className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-teal-700 px-3 text-xs font-black text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:shadow-none sm:h-11 sm:w-auto sm:gap-2 sm:px-4 sm:text-sm"
            >
              <ShoppingCart
                size={15}
                className="sm:h-[17px] sm:w-[17px]"
              />

              <span>Ajouter</span>
            </button>
          </div>
        </div>

        {/* DÉTAILS */}
        <Link
          to={`/boutique/${product.id}`}
          className="mt-3 block text-center text-[10px] font-bold text-gray-400 transition hover:text-teal-700 sm:mt-4 sm:text-xs"
        >
          Voir les détails →
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;

