import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProductCard from "../components/boutique/ProductCard";
import ProductBadge from "../components/boutique/ProductBadge";
import QuantitySelector from "../components/boutique/QuantitySelector";
import ColorSelector from "../components/boutique/ColorSelector";
import CartToast from "../components/boutique/CartToast";
import { useBoutiqueLayout } from "../components/boutique/BoutiqueLayout";
import { products } from "../data/products";
import type { ProductColor } from "../data/products";

import { useCart } from "../context/CartContext";

import {
  getProductOrderMessage,
  openWhatsApp,
} from "../utils/whatsapp";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { addToCart } = useCart();
  const { openCart } = useBoutiqueLayout();

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] =
    useState<ProductColor | null>(null);

  const [showToast, setShowToast] =
    useState(false);

 const product = products.find(
  (item) => item.id.trim() === id?.trim()
);
  // Fermer automatiquement la notification
  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowToast(false);
    }, 4000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [showToast]);

  if (!product) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-white via-teal-50/40 to-white px-4">
        {/* Halos décoratifs */}
        <div
          className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-red-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative text-center">
          <span
            className="mx-auto block h-1 w-14 rounded-full bg-gradient-to-r from-teal-500 to-red-500"
            aria-hidden="true"
          />

          <h1 className="mt-6 text-3xl font-black tracking-tight text-neutral-950">
            Produit introuvable
          </h1>

          <p className="mt-3 text-gray-500">
            Le produit que vous recherchez
            n'existe pas.
          </p>

          <Link
            to="/boutique"
            className="mt-6 inline-flex rounded-2xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 focus:outline-none focus:ring-4 focus:ring-red-200"
          >
            Retour à la boutique
          </Link>
        </div>
      </main>
    );
  }

  const formatPrice = (price: number) =>
    `${price.toLocaleString("fr-FR")} Ar`;

  const handleAddToCart = () => {
    if (
      product.couleurs &&
      product.couleurs.length > 0 &&
      !selectedColor
    ) {
      window.alert(
        "Veuillez sélectionner une couleur avant d'ajouter le produit au panier."
      );

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
      quantity
    );

    setShowToast(true);
  };

  const handleDirectOrder = () => {
    if (
      product.couleurs &&
      product.couleurs.length > 0 &&
      !selectedColor
    ) {
      window.alert(
        "Veuillez sélectionner une couleur avant de commander."
      );

      return;
    }

    const message = getProductOrderMessage({
      id: product.id,
      nom: product.nom,
      marque: product.marque,
      prix: product.prix,
      image: product.image,
      quantite: quantity,
      couleur: selectedColor?.nom,
    });

    openWhatsApp(message);
  };

  const similarProducts = products.filter(
    (item) =>
      item.categorie === product.categorie &&
      item.id !== product.id
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-[40rem] h-96 w-96 rounded-full bg-red-500/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Retour */}
      <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/boutique"
          className="group inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition-all duration-300 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
        >
          <ArrowLeft
            size={18}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Retour à la boutique
        </Link>
      </div>

      {/* Produit */}
      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative rounded-3xl bg-gradient-to-br from-teal-200/70 via-gray-200/60 to-red-200/50 p-px shadow-2xl shadow-teal-900/10">
            <div className="group relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-gray-100">
              <img
                src={product.image}
                alt={product.nom}
                className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Voile léger en bas */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950/20 to-transparent"
                aria-hidden="true"
              />

              {product.badge && (
                <div className="absolute left-5 top-5">
                  <ProductBadge
                    badge={product.badge}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center">
            <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-700">
              <span
                className="h-0.5 w-8 rounded-full bg-gradient-to-r from-teal-600 to-red-500"
                aria-hidden="true"
              />
              {product.marque}
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              {product.nom}
            </h1>

            <p className="mt-5 bg-gradient-to-r from-teal-700 to-teal-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
              {formatPrice(product.prix)}
            </p>

            <div className="mt-6 h-px bg-gradient-to-r from-teal-200 via-gray-200 to-transparent" />

            <p className="mt-6 text-base leading-8 text-gray-600">
              {product.descriptionLongue}
            </p>

            {/* Disponibilité */}
            <div className="mt-6">
              {product.disponible ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
                  <span
                    className="relative flex h-2 w-2"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                  Disponible
                </span>
              ) : (
                <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                  Produit indisponible
                </span>
              )}
            </div>

            {product.disponible && (
              <>
                {/* Couleurs */}
                {product.couleurs &&
                  product.couleurs.length > 0 && (
                    <div className="mt-8">
                      <ColorSelector
                        colors={product.couleurs}
                        selectedColor={selectedColor}
                        onSelect={setSelectedColor}
                      />
                    </div>
                  )}

                {/* Quantité */}
                <div className="mt-8">
                  <p className="mb-3 text-sm font-bold text-neutral-950">
                    Quantité
                  </p>

                  <QuantitySelector
                    quantity={quantity}
                    onDecrease={() =>
                      setQuantity((current) =>
                        Math.max(
                          1,
                          current - 1
                        )
                      )
                    }
                    onIncrease={() =>
                      setQuantity(
                        (current) =>
                          current + 1
                      )
                    }
                  />
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40 focus:outline-none focus:ring-4 focus:ring-red-200"
                  >
                    <ShoppingCart size={19} />
                    Ajouter au panier
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectOrder}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border-2 border-teal-700 bg-white px-6 py-4 text-sm font-bold text-teal-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white hover:shadow-xl hover:shadow-teal-900/20 focus:outline-none focus:ring-4 focus:ring-teal-100"
                  >
                    Commander sur WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section className="relative overflow-hidden border-t border-teal-100 bg-gradient-to-b from-teal-50/50 to-white">
          {/* Halo décoratif */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-700">
                <span
                  className="h-0.5 w-8 rounded-full bg-gradient-to-r from-teal-600 to-red-500"
                  aria-hidden="true"
                />
                Vous pourriez aussi aimer
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950">
                Produits similaires
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
  {similarProducts
    .slice(0, 4)
    .map((similarProduct) => (
      <ProductCard
        key={similarProduct.id}
        product={similarProduct}
      />
    ))}
</div>
          </div>
        </section>
      )}

      {/* Notification */}
      {showToast && (
       <CartToast
  productName={product.nom}
  color={selectedColor?.nom}
  onViewCart={() => {
    setShowToast(false);
    openCart();
  }}
  onClose={() => {
    setShowToast(false);
  }}
/>
      )}
    </main>
  );
};

export default ProductDetail;