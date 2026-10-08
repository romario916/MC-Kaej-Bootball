
import type { CartItem } from "../context/CartContext";
import type { CustomerInfo } from "../components/boutique/OrderCustomerForm";

const WHATSAPP_NUMBER = "261385857955";

export const openWhatsApp = (message: string): void => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank", "noopener,noreferrer");
};

export const getCartOrderMessage = (
  cartItems: CartItem[],
  total: number,
  customer: CustomerInfo
): string => {
  const products = cartItems
    .map((item) => {
      const subtotal =
        item.prix * item.quantite;

      const colorLine = item.couleur
        ? `  Couleur : ${item.couleur}`
        : "";

      return [
        `• ${item.nom}`,
        `  Marque : ${item.marque}`,
        colorLine,
        `  Quantité : ${item.quantite}`,
        `  Prix unitaire : ${item.prix.toLocaleString(
          "fr-FR"
        )} Ar`,
        `  Sous-total : ${subtotal.toLocaleString(
          "fr-FR"
        )} Ar`,
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n\n");

  const noteLine = customer.note
    ? `Note : ${customer.note}`
    : "";

  return [
    "Commande ROSA Boutique",
    "",
    "Bonjour, je souhaite commander les produits suivants chez ROSA Boutique :",
    "",
    products,
    "",
    `Total général : ${total.toLocaleString(
      "fr-FR"
    )} Ar`,
    "",
    "Informations client :",
    `Nom : ${customer.nom}`,
    `Téléphone : ${customer.telephone}`,
    `Lieu de livraison : ${customer.adresse}`,
    noteLine,
    "",
    "Merci.",
  ]
    .filter(Boolean)
    .join("\n");
};

export const getProductOrderMessage = (
  item: CartItem
): string => {
  const total =
    item.prix * item.quantite;

  const colorLine = item.couleur
    ? `  Couleur : ${item.couleur}`
    : "";

  return [
    "Commande ROSA Boutique",
    "",
    "Bonjour, je souhaite commander le produit suivant chez ROSA Boutique :",
    "",
    `• ${item.nom}`,
    `  Marque : ${item.marque}`,
    colorLine,
    `  Quantité : ${item.quantite}`,
    `  Prix unitaire : ${item.prix.toLocaleString(
      "fr-FR"
    )} Ar`,
    `  Total : ${total.toLocaleString(
      "fr-FR"
    )} Ar`,
    "",
    "Merci.",
  ]
    .filter(Boolean)
    .join("\n");
};

