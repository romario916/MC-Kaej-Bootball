
export type ProductCategory =
  | "Nike"
  | "Adidas"
  | "Puma"
  | "Maillot Club et National ";

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
    id: "Nike-vapor-17",
    nom: "Nike vapor 17 ",
    marque: "Nike",
    prix: 300000,
    categorie: "Nike",
    image:
      "/nike1.webp",
    descriptionCourte:
      "Pointure :41 et 43 ",
    descriptionLongue:
      "Dominez le terrain avec style et explosivité ! À vendre, paire de chaussures de football Nike haut de gamme, conçue pour les joueurs qui recherchent la vitesse, la légèreté et un toucher de balle d'exception.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "Nike-vapor-17-vert",
    nom: "Nike vapor 17",
    marque: "Nike",
    prix: 300000,
    categorie: "Nike",
    image:
      "/nike2.webp",
    descriptionCourte:
      "Pointure :44",
    descriptionLongue:
      "Faites sensation sur le terrain et brillez par votre vitesse ! À vendre, paire de chaussures de football Nike haut de gamme au coloris flashy et audacieux, parfaite pour ne pas passer inaperçu tout en maximisant vos performances.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Nike-vapor-16 ",
    nom: "Nike vapor 16",
    marque: "Nike",
    prix: 250000,
    categorie: "Nike",
    image:
      "/nike3.webp",
    descriptionCourte:
      "Pointure :41 ,43 et 44",
    descriptionLongue:
      "Élevez votre jeu au niveau supérieur avec ces crampons d’élite ! Conçus pour les joueurs qui dictent le rythme et recherchent une réactivité explosive sur le terrain.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "Nike-phantom-6  ",
    nom: "Nike phantom 6 ",
    marque: "Nike",
    prix: 300000,
    categorie: "Nike",
    image:
      "/nike4.webp",
    descriptionCourte:
      "Pointure : 43 ",
    descriptionLongue:
      " Exercez un contrôle absolu sur le match et distillez les passes décisives avec précision ! À vendre, paire de crampons Nike Phantom haut de gamme, conçue pour les maîtres à jouer, créateurs et buteurs exigeants.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "Nike-vapor-16-mixte  ",
    nom: "Nike vapor 16 mixte",
    marque: "Nike",
    prix: 300000,
    categorie: "Nike",
    image:
      "/nike5.webp",
    descriptionCourte:
      "Pointure : 44 ",
    descriptionLongue:
      " Exercez un contrôle absolu sur le match et distillez les passes décisives avec précision ! À vendre, paire de crampons Nike Phantom haut de gamme, conçue pour les maîtres à jouer, créateurs et buteurs exigeants.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "Nike-vapor-15  ",
    nom: "Nike vapor 15",
    marque: "Nike",
    prix: 250000,
    categorie: "Nike",
    image:
      "/nike6.webp",
    descriptionCourte:
      "Pointure : 41 et 43 ",
    descriptionLongue:
      " Brillez par votre élégance et votre vitesse fulgurante sur le terrain ! À vendre, paire de crampons Nike Mercurial Superfly haut de gamme, conçue pour les joueurs explosifs qui cherchent à allier un look d'exception à des performances de pointe.",
    badge: "Populaire",
    disponible: true,
  },
   {
    id: "Nike-phantom-6-low ",
    nom: "Nike phantom 6 low",
    marque: "Nike",
    prix: 300000,
    categorie: "Nike",
    image:
      "/nike7.webp",
    descriptionCourte:
      "Pointure : 39 et 40 ",
    descriptionLongue:
      " Mettez de la couleur et de la précision dans votre jeu ! À vendre, paire de crampons Nike Phantom de qualité supérieure, conçue pour les créateurs et les joueurs qui exigent un toucher de balle chirurgical et un confort absolu.",
    badge: "Populaire",
    disponible: true,
  },
  {
    id: "Adidas-F50-messi ",
    nom: "Adidas F50 messi ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas1.webp",
    descriptionCourte:
      "Pointure : 44",
    descriptionLongue:
      "Jouez avec la classe et la vitesse du GOAT ! À vendre, paire de crampons Adidas signature inspirée de Lionel Messi, conçue pour les joueurs agiles qui veulent faire la différence par leurs dribbles fulgurants et leur précision.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
  {
    id: "Adidas-Crazyfast  ",
    nom: "Adidas Crazyfast ",
    marque: "Adidas",
    prix: 250000,
    categorie: "Adidas",
    image:
      "/adidas2.webp",
    descriptionCourte:
      "Pointure : 40,41,43 et 44",
    descriptionLongue:
      "Libérez toute votre vitesse sur le terrain ! À vendre, paire de crampons Adidas X de haute qualité, spécialement conçue pour les joueurs explosifs, les ailiers et les attaquants qui cherchent à faire la différence sur chaque accélération.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
   {
    id: "Adidas-Predator-1  ",
    nom: "Adidas Predator",
    marque: "Adidas",
    prix: 250000,
    categorie: "Adidas",
    image:
      "/adidas3.webp",
    descriptionCourte:
      "Pointure : 40 et 44",
    descriptionLongue:
      "Maîtrisez le jeu, dominez les duels et réussissez vos frappes enroulées avec une précision chirurgicale ! À vendre, paire de crampons Adidas Predator haut de gamme, l'arme absolue pour les milieux de terrain et les buteurs exigeants.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
  {
    id: "Adidas-Copa-1 ",
    nom: "Adidas Copa ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas4.webp",
    descriptionCourte:
      "Pointure : 41",
    descriptionLongue:
      "Alliez un toucher de balle exceptionnel à un confort absolu sur le terrain ! À vendre, paire de crampons Adidas Copa haut de gamme, conçue pour les joueurs qui recherchent la maîtrise du jeu, la stabilité et l'élégance.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
  {
    id: "Adidas-Copa-marine ",
    nom: "Adidas Copa ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas5.webp",
    descriptionCourte:
      "Pointure : 40 et 41 ",
    descriptionLongue:
      "Jouez avec une élégance intemporelle et un toucher de balle d'une pureté absolue ! À vendre, paire de crampons Adidas Copa Pure haut de gamme, conçue pour les joueurs qui recherchent un confort supérieur et un contrôle précis du ballon.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
  {
    id: "Adidas-F50-messi-pro  ",
    nom: "Adidas F50 messi ",
    marque: "Adidas",
    prix: 250000,
    categorie: "Adidas",
    image:
      "/adidas6.webp",
    descriptionCourte:
      "Pointure : 45",
    descriptionLongue:
      "Brillez de mille feux sur le terrain et faites admirer votre vitesse de pointe ! À vendre, paire de crampons Adidas X haut de gamme, conçue pour les joueurs explosifs qui veulent allier des performances de niveau professionnel à un style royal.",
    badge: "Nouveau",
    disponible: true,
    
    
  },
   {
    id: "Adidas-F50-pro",
    nom: "Adidas F50",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas7.webp",
    descriptionCourte:
      "Pointure : 43 et 44",
    descriptionLongue:
      "Retrouvez la vitesse légendaire de la gamme F50 ! À vendre, paire de crampons Adidas F50 haut de gamme sans lacets, conçue pour les joueurs ultra-rapides et les attaquants cherchant une pureté de frappe et une agilité maximale sur le terrain.",
    badge: "Nouveau",
    disponible: true,
  },
   {
    id: "Adidas-F50-vert",
    nom: "Adidas F50",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas8.webp",
    descriptionCourte:
      "Pointure : 39",
    descriptionLongue:
      "Affichez un style ultra-lumineux et libérez votre vitesse explosive sur le terrain ! À vendre, paire de crampons Adidas F50 haute performance sans lacets, conçue pour les joueurs qui veulent faire la différence sur chaque accélération.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-Crazyfast-2 ",
    nom: "Adidas Crazyfast ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas9.webp",
    descriptionCourte:
      "Pointure : 40 et 43",
    descriptionLongue:
      "Faites parler votre vitesse et brillez sur la pelouse avec ce modèle d'exception ! À vendre, paire de crampons Adidas X haute performance sans lacets, conçue pour les joueurs explosifs qui cherchent un design audacieux et un maintien parfait.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-Predator-2  ",
    nom: "Adidas Predator  ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas10.webp",
    descriptionCourte:
      "Pointure : 41",
    descriptionLongue:
      "Superbe paire ! Ce sont des crampons Adidas Predator dans un magnifique coloris rouge vif, blanc et noir, avec une semelle technique texturée et le marquage Predator visible.   Voici une description professionnelle et percutante prête à être publiée pour votre vente :Titre de l'annonce :Crampons Adidas Predator - Édition Rouge / Blanc / Noir - NeufDescription :Prenez le contrôle total du match et réussissez vos frappes avec une précision chirurgicale ! À vendre, paire de crampons Adidas Predator haut de gamme, conçue pour les joueurs exigeants qui veulent dicter le rythme et faire la différence dans les moments clés. ",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-F50-pro-2 ",
    nom: "Adidas F50 ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas11.webp",
    descriptionCourte:
      "Pointure : 41 et 43",
    descriptionLongue:
      "Exprimez toute votre explosivité et faites sensation sur le terrain avec ce modèle ultra-tendance ! À vendre, paire de crampons Adidas haute performance sans lacets, conçue pour les joueurs qui recherchent la vitesse, l'agilité et un design qui se remarque. ",
    badge: "Nouveau",
    disponible: true,
  },
   {
    id: "Adidas-F50-Hyperfast-1  ",
    nom: "Adidas F50 Hyperfast  ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas12.webp",
    descriptionCourte:
      "Pointure : 40",
    descriptionLongue:
      "Affichez un style audacieux et libérez votre vitesse explosive sur le terrain ! À vendre, paire de crampons Adidas X haute performance sans lacets, conçue pour les joueurs agiles qui veulent faire la différence à chaque accélération.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-F50-Hyperfast-vert-filio  ",
    nom: "Adidas F50 Hyperfast  ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas13.webp",
    descriptionCourte:
      "Pointure : 39 et 40",
    descriptionLongue:
      "Affichez un style ultra-lumineux et libérez votre vitesse explosive sur le terrain ! À vendre, paire de crampons Adidas F50 haute performance sans lacets, conçue pour les joueurs qui veulent faire la différence à chaque accélération.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-F50-Hyperfast-rose  ",
    nom: "Adidas F50 Hyperfast  ",
    marque: "Adidas",
    prix: 300000,
    categorie: "Adidas",
    image:
      "/adidas14.webp",
    descriptionCourte:
      "Pointure : 39 et 40",
    descriptionLongue:
      "Affichez un style ultra-tendance et libérez votre vitesse explosive sur le terrain ! À vendre, paire de crampons Adidas haute performance sans lacets, conçue pour les joueurs agiles et rapides qui veulent faire la différence à chaque accélération.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Adidas-Crazyfast-pro-3",
    nom: "Adidas Crazyfast",
    marque: "Adidas",
    prix: 250000,
    categorie: "Adidas",
    image:
      "/adidas15.webp",
    descriptionCourte:
      "Pointure : 45",
    descriptionLongue:
      "Affichez un style percutant et libérez toute votre vitesse sur le terrain ! À vendre, paire de crampons Adidas X à lacets haut de gamme, conçue pour les joueurs agiles et les attaquants qui cherchent un maintien classique et des performances explosives.",
    badge: "Nouveau",
    disponible: true,
  },
  {
    id: "Puma-futur-9 ",
    nom: "Puma futur 9 ",
    marque: "Puma",
    prix: 250000,
    categorie: "Puma",
    image:
      "/puma1.webp",
    descriptionCourte:
      "Pointure : 40,41 et 44",
    descriptionLongue:
      "Faites parler votre vitesse et brillez sur la pelouse avec ce modèle ultra-dynamique ! À vendre, paire de crampons Puma haute performance, conçue pour les joueurs explosifs qui cherchent un design audacieux et un maintien parfait sur le terrain.",
    badge: "Populaire",
      disponible: true,
  },
  
  {
    id: "Maillot-Club-et-National-Version-player-Logo-goma",
    nom: "Maillot Club et National Version player Logo goma ",
    marque: "Qualite",
    prix: 70000,
    categorie: "Maillot Club et National ",
    image:
      "/maillot1.webp",
    descriptionCourte:
      "Taille : S,M,L,XL",
    descriptionLongue:
      "Affichez fièrement les couleurs de votre équipe favorite sur le terrain ou en tribunes ! À vendre, une sélection de maillots de football de grande qualité, parfaits pour les supporters et les joueurs exigeants.",
    badge: "Populaire",
    disponible: true,
    
  },
 
  

 
  
 
];

export const categories: ProductCategory[] = [
  "Nike",
  "Adidas",
  "Puma",
  "Maillot Club et National ",
  
];

