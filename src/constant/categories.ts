export interface ICategory {
  name: string;
  desc: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  name: string;
  services: IService[];
}

export interface IService {
  name: string;
  price: number;
  time: string;
  options: string[];
  desc?: string;
}

export const categories: ICategory[] = [
  {
    name: "Onglerie",
    desc: "pose de faux ongles",
    subcategories: [
      {
        name: "Soins pour des mains",
        services: [
          {
            name: "Vernis classique des mains",
            price: 15,
            time: "15 min",
            options: [],
          },
          {
            name: "Vernis classique des mains",
            price: 30,
            time: "35 min",
            options: ["beauté des mains"],
          },
          {
            name: "Pose vernis semi-permanent",
            price: 28,
            time: "30 min",
            options: [],
          },
          {
            name: "Beauté des mains",
            price: 20,
            time: "20 min",
            options: [],
          },
          {
            name: "Beauté des mains",
            price: 43,
            time: "55 min",
            options: ["pose vernis semi-permanent"],
          },
          {
            name: "Beauté des mains",
            price: 53,
            time: "1 h 10 min",
            options: ["French"],
          },
          {
            name: "Dépose semi",
            price: 33,
            time: "45 min",
            options: ["repose semi-permanent"],
          },
          {
            name: "Dépose semi",
            price: 48,
            time: "1 h 10 min",
            options: ["beauté des mains", "repose semi-permanent"],
          },
        ],
      },
      {
        name: "Soins pour des pieds",
        services: [
          {
            name: "Vernis classique des pieds",
            price: 15,
            time: "15 min",
            options: [],
          },
          {
            name: "Vernis classique des pieds",
            price: 45,
            time: "45 min",
            options: ["beauté des pieds"],
          },
          {
            name: "Pose vernis semi-permanent",
            price: 28,
            time: "30 min",
            options: [],
          },
          {
            name: "Beauté des pieds",
            price: 35,
            time: "30 min",
            options: [],
          },
          {
            name: "Beauté des pieds",
            price: 58,
            time: "1 h",
            options: ["pose vernis semi-permanent"],
          },
          {
            name: "Beauté des pieds",
            price: 68,
            time: "1 h 10 min",
            options: ["French"],
          },
          {
            name: "Dépose semi",
            price: 33,
            time: "50 min",
            options: ["repose semi-permanent"],
          },
          {
            name: "Dépose semi",
            price: 63,
            time: "1 h 30 min",
            options: ["beauté des pieds", "repose semi-permanent"],
          },
        ],
      },
      {
        name: "Résine",
        services: [
          {
            name: "Pose de la résine",
            price: 60,
            time: "1 h 30 min",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Pose de la résine",
            price: 70,
            time: "1 h 40 min",
            options: ["French"],
          },
          {
            name: "Remplissage résine",
            price: 55,
            time: "1 h",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Remplissage résine",
            price: 65,
            time: "1 h 10 min",
            options: ["French"],
          },
        ],
      },
      {
        name: "Gel",
        services: [
          {
            name: "Pose du gel",
            price: 70,
            time: "1 h 30 min",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Pose du gel",
            price: 80,
            time: "1 h 40 min",
            options: ["French"],
          },
          {
            name: "Remplissage du gel",
            price: 65,
            time: "1 h",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Remplissage du gel",
            price: 75,
            time: "1 h 10 min",
            options: ["French"],
          },
          {
            name: "Gainage",
            price: 43,
            time: "45 min",
            options: ["couleur"],
          },
          {
            name: "Gainage",
            price: 58,
            time: "1 h",
            options: ["couleur", "beauté des mains"],
          },
          {
            name: "Gainage",
            price: 43,
            time: "45 min",
            options: ["vernis semi-permanent"],
          },
        ],
      },
      {
        name: "Dépose",
        services: [
          {
            name: "Vernis semi-permanent mains",
            price: 10,
            time: "20 min",
            options: [],
          },
          {
            name: "Vernis semi-permanent pieds",
            price: 10,
            time: "20 min",
            options: [],
          },
          {
            name: "Résine",
            price: 15,
            time: "30 min",
            options: [],
          },
          {
            name: "Gel",
            price: 15,
            time: "30 min",
            options: [],
          },
          {
            name: "Ongle cassé",
            price: 5,
            time: "5 min",
            options: [],
            desc: "(résine ou gel)",
          },
        ],
      },
    ],
  },
  {
    name: "Épilation",
    desc: "femme uniquement",
    subcategories: [
      {
        name: "Épilation à la cire",
        services: [
          {
            name: "Sourcils",
            price: 10,
            time: "15 min",
            options: [],
          },
          {
            name: "Lèvre",
            price: 8,
            time: "10 min",
            options: [],
          },
          {
            name: "Menton",
            price: 8,
            time: "10 min",
            options: [],
          },
          {
            name: "Aisselles",
            price: 12,
            time: "10 min",
            options: [],
          },
          {
            name: "Visage",
            price: 25,
            time: "30 min",
            options: [],
          },
        ],
      },
      {
        name: "Maillot / Fesses",
        services: [
          {
            name: "Maillot simple",
            price: 16,
            time: "20 min",
            options: [],
          },
          {
            name: "Maillot échancré",
            price: 20,
            time: "25 min",
            options: [],
          },
          {
            name: "Maillot brésilien",
            price: 25,
            time: "30 min",
            options: [],
          },
          {
            name: "Maillot intégral",
            price: 35,
            time: "35 min",
            options: [],
          },
          {
            name: "Fesses",
            price: 22,
            time: "20 min",
            options: [],
          },
          {
            name: "Interfessier",
            price: 5,
            time: "10 min",
            options: [],
          },
        ],
      },
      {
        name: "Bras / Jambes",
        services: [
          {
            name: "Bras",
            price: 12,
            time: "15 min",
            options: [],
            desc: "(demi)",
          },
          {
            name: "Bras",
            price: 18,
            time: "25 min",
            options: [],
            desc: "(complets)",
          },
          {
            name: "Jambes",
            price: 18,
            time: "20 min",
            options: [],
            desc: "(demi)",
          },
          {
            name: "Jambes",
            price: 28,
            time: "35 min",
            options: [],
            desc: "(complets)",
          },
        ],
      },
    ],
  },
  {
    name: "Extension des cils",
    desc: "",
    subcategories: [
      {
        name: "Extension des cils",
        services: [
          {
            name: "Extension des cils un per un",
            price: 85,
            time: "1 h 40 min",
            options: [],
          },
          {
            name: "Remplissage des cils",
            price: 50,
            time: "1 h 10 min",
            options: [],
          },
          {
            name: "Remplissage des cils",
            price: 60,
            time: "1 h 20 min",
            options: [],
            desc: "(perdu beaucoup)",
          },
          {
            name: "Teinture des sourcils",
            price: 20,
            time: "25 min",
            options: [],
          },
          {
            name: "Teinture des cils",
            price: 20,
            time: "25 min",
            options: [],
          },
          {
            name: "Rehaussement des cils",
            price: 55,
            time: "45 min",
            options: [],
          },
        ],
      },
    ],
  },
];
