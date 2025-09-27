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
            time: "",
            options: [],
          },
          {
            name: "Vernis classique des mains",
            price: 30,
            time: "",
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
            time: "",
            options: [],
          },
          {
            name: "Beauté des mains",
            price: 43,
            time: "",
            options: ["pose vernis semi-permanent"],
          },
          {
            name: "Beauté des mains",
            price: 53,
            time: "",
            options: ["French"],
          },
          {
            name: "Dépose semi",
            price: 33,
            time: "",
            options: ["repose semi-permanent"],
          },
          {
            name: "Dépose semi",
            price: 48,
            time: "",
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
            time: "",
            options: [],
          },
          {
            name: "Vernis classique des pieds",
            price: 45,
            time: "",
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
            time: "35 min",
            options: [],
          },
          {
            name: "Beauté des pieds",
            price: 58,
            time: "1 h 10 min - 1 h 20 min",
            options: ["pose vernis semi-permanent"],
          },
          {
            name: "Beauté des pieds",
            price: 68,
            time: "",
            options: ["French"],
          },
          {
            name: "Dépose semi",
            price: 33,
            time: "",
            options: ["repose semi-permanent"],
          },
          {
            name: "Dépose semi",
            price: 63,
            time: "",
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
            time: "",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Pose de la résine",
            price: 70,
            time: "",
            options: ["French"],
          },
          {
            name: "Remplissage résine",
            price: 55,
            time: "",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Remplissage résine",
            price: 65,
            time: "",
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
            time: "",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Pose du gel",
            price: 80,
            time: "",
            options: ["French"],
          },
          {
            name: "Remplissage du gel",
            price: 65,
            time: "",
            options: ["vernis semi-permanent"],
          },
          {
            name: "Remplissage du gel",
            price: 75,
            time: "",
            options: ["French"],
          },
          {
            name: "Gainage",
            price: 43,
            time: "45 min - 1 h",
            options: ["couleur"],
          },
          {
            name: "Gainage",
            price: 43,
            time: "",
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
            time: "25 min",
            options: [],
          },
          {
            name: "Gel",
            price: 15,
            time: "25 min",
            options: [],
          },
          {
            name: "Ongle cassé",
            price: 5,
            time: "10 min",
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
            time: "",
            options: [],
          },
          {
            name: "Lèvre",
            price: 8,
            time: "",
            options: [],
          },
          {
            name: "Menton",
            price: 8,
            time: "",
            options: [],
          },
          {
            name: "Aisselles",
            price: 12,
            time: "",
            options: [],
          },
          {
            name: "Visage",
            price: 25,
            time: "10 min - 30 min",
            options: [],
          },
        ],
      },
      {
        name: "Maillot",
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
            time: "30 min",
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
            time: "",
            options: [],
            desc: "(demi)",
          },
          {
            name: "Bras",
            price: 18,
            time: "",
            options: [],
            desc: "(complets)",
          },
          {
            name: "Jambes",
            price: 18,
            time: "",
            options: [],
            desc: "(demi)",
          },
          {
            name: "Jambes",
            price: 28,
            time: "",
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
            desc: "(dans deux semaines)",
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
