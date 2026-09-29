
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
  const { id } = useParams();

  const { addToCart } = useCart();
  const { openCart } = useBoutiqueLayout();

  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] =
    useState<ProductColor | null>(null);

  const [showToast, setShowToast] =
    useState(false);

  const product = products.find(
    (item) => item.id === id
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
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-3xl font-black text-black">
            Produit introuvable
          </h1>

          <p className="mt-3 text-gray-500">
            Le produit que vous recherchez
            n'existe pas.
          </p>

          <Link
            to="/boutique"
            className="mt-6 inline-flex rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
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
    <main className="min-h-screen bg-white">
      {/* Retour */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <Link
          to="/boutique"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-violet-700"
        >
          <ArrowLeft size={18} />
          Retour à la boutique
        </Link>
      </div>

      {/* Produit */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-100">
            <img
              src={product.image}
              alt={product.nom}
              className="aspect-square h-full w-full object-cover"
            />

            {product.badge && (
              <div className="absolute left-5 top-5">
                <ProductBadge
                  badge={product.badge}
                />
              </div>
            )}
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              {product.marque}
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight text-black sm:text-4xl">
              {product.nom}
            </h1>

            <p className="mt-5 text-2xl font-black text-violet-700">
              {formatPrice(product.prix)}
            </p>

            <div className="mt-6 h-px bg-gray-200" />

            <p className="mt-6 text-base leading-8 text-gray-600">
              {product.descriptionLongue}
            </p>

            {/* Disponibilité */}
            <div className="mt-6">
              {product.disponible ? (
                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Disponible
                </span>
              ) : (
                <span className="inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500">
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
                  <p className="mb-3 text-sm font-bold text-black">
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
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-violet-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
                  >
                    <ShoppingCart size={19} />
                    Ajouter au panier
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectOrder}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border-2 border-black px-6 py-4 text-sm font-bold text-black transition hover:bg-black hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200"
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
        <section className="border-t border-gray-100 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
                Vous pourriez aussi aimer
              </p>

              <h2 className="mt-2 text-3xl font-black text-black">
                Produits similaires
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

