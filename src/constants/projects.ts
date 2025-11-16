import cozyLifeImg from "../assets/cozyLife.jpeg";
import libraryImg from "../assets/library.png";
import circleImg from "../assets/circle.jpg";
import appleVido from "../assets/apple.mp4";
import todolistVideo from "../assets/todolist.mp4";
import meteoVideo from "../assets/meteo.mp4";
import gearVideo from "../assets/gear.mp4";
import cozyVideo from "../assets/cozyLife.mp4";
import libraryVideo from "../assets/library.mp4";

export const projects = {
  circle: {
    name: "Circle",
    tech: ["React Native", "Nativewind", "Expo", "Firebase"],
    link: {
      text: "Obtenir l'APK Android",
      href: "#",
    },
    img: circleImg,
    slogan: "Application mobile de rencontre en groupe.",
    desc: "Application mobile sociale développée en React Native, permettant de rassembler des groupes de personnes partageant des centres d’intérêt et des personnalités compatibles. Elle facilite l’organisation de dîners et d’activités conviviales, favorisant la rencontre et l’échange en dehors du cadre professionnel. En tant que développeur full stack, j’ai conçu et implémenté l’ensemble des fonctionnalités techniques, du front-end mobile à l’architecture serveur, en collaboration avec un designer UX/UI en charge de l’expérience utilisateur et de l’identité visuelle.",
  },
  athora: {
    name: "AthoraFit",
    tech: [
      "React",
      "Express",
      "Tailwind",
      "Supabase",
      "Stripe",
      "Resend",
      "Railway",
    ],
    link: {
      text: "Visiter le site web",
      href: "https://athorafit.com",
    },
    slogan:
      "Service donnant accès à une liste de salles de sport partenaires via un abonnement unique.",
    desc: "Service par abonnement donnant accès à un réseau de salles de sport partenaires, offrant aux utilisateurs une solution flexible pour s’entraîner où qu’ils soient. Le service inclut la gestion des abonnements, le suivi des utilisateurs et la connexion avec les établissements partenaires, actuellement en cours de déploiement aux États-Unis. En tant que développeur full stack, j’ai conçu l’architecture technique du projet : structuration de la base de données, création de l’API, intégration du système de paiement via Stripe, déploiement sur Railway et gestion des notifications avec Resend. J’ai également participé à la mise en place de l’onboarding utilisateur, en collaboration avec l’équipe marketing et partenariats.",
  },
  cozyLife: {
    name: "Cozy Life",
    tech: ["Unreal Engine"],
    slogan:
      "Jeu multijoueur en 3D développé sous Unreal Engine, mêlant exploration, gestion et survie.",
    desc: "Jeu multijoueur en 3D développé sous Unreal Engine, mêlant exploration, gestion et survie. Les joueurs peuvent partir en expédition pour récolter des ressources, améliorer leur village et collaborer afin d’assurer la prospérité de leur communauté. En tant que développeur principal, j’ai conçu et implémenté la majorité des systèmes de gameplay, incluant la gestion des ressources, le multijoueur, et les interactions entre les joueurs et l’environnement.",
    img: cozyVideo,
  },
  uniLibrary: {
    name: "Librairie universitaire",
    tech: ["React", "ImageKit", "Neon", "Drizzle"],
    link: {
      text: "Voir le repo GitHub",
      href: "#",
    },
    slogan: "",
    img: libraryVideo,
  },
  apple: {
    name: "Apple Landing Page",
    tech: ["React", "ThreeJS", "Gsap"],
    desc: "Landing page interactive inspirée des présentations produits haut de gamme, mettant en valeur un modèle 3D d’iPhone affiché en temps réel. Le site combine design minimaliste et transitions fluides pour offrir une expérience immersive et moderne. J’ai développé la page de A à Z en utilisant Three.js pour l’affichage et la manipulation du modèle 3D, ainsi que GSAP pour les animations et transitions. Le résultat : une démonstration technique axée sur la fluidité et la mise en scène produit.",
    link: {
      text: "Voir le repo GitHub",
      href: "#",
    },
    slogan:
      "Landing page interactive inspirée des présentations de produits haut de gamme.",
    img: appleVido,
  },
  gear: {
    name: "Gear Landing Page",
    tech: ["React", "Framer Motion"],
    link: {
      text: "Voir le repo GitHub",
      href: "#",
    },
    desc: "",
    slogan: "",
    img: gearVideo,
  },
  meteo: {
    name: "Météo",
    tech: ["React"],
    desc: "Application web permettant de consulter les prévisions météo pour n’importe quel lieu dans le monde grâce à l’API OpenWeatherMap. L’interface offre une recherche rapide et affiche des informations détaillées sur les conditions actuelles et les prévisions à venir. J’ai conçu et développé la webapp en intégrant l’API OpenWeatherMap, en gérant la récupération et l’affichage dynamique des données météorologiques, ainsi que la mise en forme responsive pour une expérience fluide sur tous les supports.",
    link: {
      text: "Voir le repo GitHub",
      href: "#",
    },
    slogan: "WebApp de prévisions météo basée sur l'API OpenWeatherMap.",
    img: meteoVideo,
  },
  todolist: {
    name: "To do list",
    tech: ["React"],
    link: {
      text: "Voir le repo GitHub",
      href: "#",
    },
    desc: "",
    slogan: "",
    img: todolistVideo,
  },
};
