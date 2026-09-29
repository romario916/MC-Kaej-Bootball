
export type ProductCategory =
  | "Shampoing"
  | "Soin"
  | "Coiffage"
  | "Maquillage"
  | "Outils";

export type ProductBadge = "Nouveau" | "Populaire";

export interface ProductColor {
  nom: string;
  valeur: string;
}

export interface Product {
  id: string;
  nom: string;
  marque: string;
  prix: number;
  categorie: ProductCategory;
  image: string;
  descriptionCourte: string;
  descriptionLongue: string;
  badge?: ProductBadge;
  disponible: boolean;
  couleurs?: ProductColor[];
}

export const products: Product[] = [
  {
    id: "shampoo-hydratation",
    nom: "Shampoing Hydratation Intense",
    marque: "L'Oréal Paris",
    prix: 28000,
    categorie: "Shampoing",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Un shampoing doux pour cheveux secs et déshydratés.",
    descriptionLongue:
      "Le Shampoing Hydratation Intense nettoie délicatement les cheveux tout en leur apportant une sensation de douceur et de fraîcheur. Sa formule est adaptée aux cheveux secs qui ont besoin d'une routine hydratante.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "shampoo-repair",
    nom: "Shampoing Réparation",
    marque: "Kérastase",
    prix: 45000,
    categorie: "Shampoing",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une formule dédiée aux cheveux fragilisés.",
    descriptionLongue:
      "Ce shampoing accompagne les cheveux fragilisés et leur apporte une sensation de soin et de confort. Il s'intègre facilement dans une routine capillaire régulière.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "masque-nutrition",
    nom: "Masque Nutrition Intense",
    marque: "L'Oréal Professionnel",
    prix: 38000,
    categorie: "Soin",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Un soin nourrissant pour une chevelure douce.",
    descriptionLongue:
      "Le Masque Nutrition Intense complète la routine capillaire avec un soin riche destiné aux cheveux qui recherchent davantage de douceur et de confort.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "huile-capillaire",
    nom: "Huile Capillaire Brillance",
    marque: "Moroccanoil",
    prix: 52000,
    categorie: "Soin",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une huile légère pour apporter brillance et douceur.",
    descriptionLongue:
      "Cette huile capillaire légère s'utilise sur les longueurs et les pointes pour compléter une routine beauté et apporter une finition brillante.",
    badge: "Nouveau",
    disponible: true,
    couleurs: [
      {
        nom: "Rouge",
        valeur: "#B91C1C",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Nude",
        valeur: "#C08457",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },
  {
    id: "spray-fixation",
    nom: "Spray Fixation Professionnel",
    marque: "Wella",
    prix: 32000,
    categorie: "Coiffage",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une fixation longue durée pour vos coiffures.",
    descriptionLongue:
      "Le Spray Fixation Professionnel aide à maintenir les coiffures tout au long de la journée avec une finition adaptée aux routines de coiffage.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "creme-coiffante",
    nom: "Crème Coiffante Définition",
    marque: "Garnier",
    prix: 25000,
    categorie: "Coiffage",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8f9f9f9a9?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une crème pour faciliter le coiffage quotidien.",
    descriptionLongue:
      "La Crème Coiffante Définition facilite la mise en forme des cheveux et permet d'intégrer facilement un produit coiffant dans votre routine quotidienne.",
    disponible: true,
  },
  {
    id: "rouge-levres",
    nom: "Rouge à Lèvres Premium",
    marque: "Maybelline",
    prix: 22000,
    categorie: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une couleur élégante pour accompagner votre maquillage.",
    descriptionLongue:
      "Ce rouge à lèvres apporte une finition élégante et s'intègre facilement dans une routine maquillage quotidienne ou pour une occasion spéciale.",
    badge: "Populaire",
    disponible: true,
    couleurs: [
      {
        nom: "Rouge",
        valeur: "#B91C1C",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Nude",
        valeur: "#C08457",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },
  {
    id: "palette-maquillage",
    nom: "Palette Maquillage Essential",
    marque: "NYX Professional Makeup",
    prix: 55000,
    categorie: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une palette polyvalente pour créer différents looks.",
    descriptionLongue:
      "La Palette Maquillage Essential propose plusieurs teintes permettant de composer différents styles de maquillage selon vos envies.",
    badge: "Nouveau",
    disponible: true,
    couleurs: [
      {
        nom: "Naturel",
        valeur: "#D6A77A",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },
  {
    id: "brosse-professionnelle",
    nom: "Brosse Professionnelle",
    marque: "Olivia Garden",
    prix: 30000,
    categorie: "Outils",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une brosse pratique pour le coiffage quotidien.",
    descriptionLongue:
      "Cette brosse professionnelle est conçue pour accompagner le coiffage quotidien et faciliter la mise en forme des cheveux.",
    badge: "Populaire",
    disponible: true,
     couleurs: [
      {
        nom: "Rouge",
        valeur: "#B91C1C",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Nude",
        valeur: "#C08457",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },

  {
    id: "palette-maquillage",
    nom: "Palette Maquillage Essential",
    marque: "NYX Professional Makeup",
    prix: 55000,
    categorie: "Maquillage",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une palette polyvalente pour créer différents looks.",
    descriptionLongue:
      "La Palette Maquillage Essential propose plusieurs teintes permettant de composer différents styles de maquillage selon vos envies.",
    badge: "Nouveau",
    disponible: true,
    couleurs: [
      {
        nom: "Naturel",
        valeur: "#D6A77A",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },
  {
    id: "seche-cheveux",
    nom: "Sèche-Cheveux Professionnel",
    marque: "Remington",
    prix: 145000,
    categorie: "Outils",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Un sèche-cheveux pensé pour le coiffage à domicile.",
    descriptionLongue:
      "Ce sèche-cheveux professionnel accompagne les différentes étapes du coiffage et constitue un outil pratique pour une routine beauté à domicile.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "huile-capillaire",
    nom: "Huile Capillaire Brillance",
    marque: "Moroccanoil",
    prix: 52000,
    categorie: "Soin",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    descriptionCourte:
      "Une huile légère pour apporter brillance et douceur.",
    descriptionLongue:
      "Cette huile capillaire légère s'utilise sur les longueurs et les pointes pour compléter une routine beauté et apporter une finition brillante.",
    badge: "Nouveau",
    disponible: true,
    couleurs: [
      {
        nom: "Rouge",
        valeur: "#B91C1C",
      },
      {
        nom: "Rose",
        valeur: "#EC4899",
      },
      {
        nom: "Nude",
        valeur: "#C08457",
      },
      {
        nom: "Violet",
        valeur: "#7C3AED",
      },
    ],
  },
];

export const categories: ProductCategory[] = [
  "Shampoing",
  "Soin",
  "Coiffage",
  "Maquillage",
  "Outils",
];

