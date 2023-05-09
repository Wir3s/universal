// Define an array of objects, where each object represents a card
const cardData = [
  {
    id: 1,
    thumbnailUrl: "./assets/images/01.jpg",
    imageUrl: "./assets/images/01.jpg",
    description: "Our hero, Runty Collins.",
  },
  {
    id: 2,
    thumbnailUrl: "./assets/images/02.jpg",
    imageUrl: "./assets/images/02.jpg",
    description: "",
  },
  {
    id: 3,
    thumbnailUrl: "./assets/images/03.jpg",
    imageUrl: "./assets/images/03.jpg",
    description: "Mr. Bachsus.",
  },
  {
    id: 4,
    thumbnailUrl: "./assets/images/04.jpg",
    imageUrl: "./assets/images/04.jpg",
    description: "Enchanté. Mrs. Vogel.",
  },
  {
    id: 5,
    thumbnailUrl: "./assets/images/05.jpg",
    imageUrl: "./assets/images/05.jpg",
    description: "Overton, the Eternal.",
  },
  {
    id: 6,
    thumbnailUrl: "./assets/images/06.jpg",
    imageUrl: "./assets/images/06.jpg",
    description: "The nefarious Leper King.",
  },
  {
    id: 7,
    thumbnailUrl: "./assets/images/07.jpg",
    imageUrl: "./assets/images/07.jpg",
    description: "Prewitt L. Garnier, a demon looking to “Angel up.”",
  },
  {
    id: 8,
    thumbnailUrl: "./assets/images/08.jpg",
    imageUrl: "./assets/images/08.jpg",
    description:
      "Francois Baudin, last free person of the Derveh people, and his ally Mozambo the Great Bear Lord.",
  },
  {
    id: 9,
    thumbnailUrl: "./assets/images/09.jpg",
    imageUrl: "./assets/images/09.jpg",
    description:
      "Newton Freberg, the World’s Youngest Detective, and his faithful mutt, Duke.",
  },
  {
    id: 10,
    thumbnailUrl: "./assets/images/10.jpg",
    imageUrl: "./assets/images/10.jpg",
    description: "Lillian Collins.",
  },
  {
    id: 11,
    thumbnailUrl: "./assets/images/11.jpg",
    imageUrl: "./assets/images/11.jpg",
    description: "General Leighton Amadeus.",
  },
  {
    id: 12,
    thumbnailUrl: "./assets/images/12.jpg",
    imageUrl: "./assets/images/12.jpg",
    description: "General Amadeus’ airship, The Hunted-Six.",
  },
  {
    id: 13,
    thumbnailUrl: "./assets/images/13.jpg",
    imageUrl: "./assets/images/13.jpg",
    description: "Inquisitor Thwartrap.",
  },
  {
    id: 14,
    thumbnailUrl: "./assets/images/14.jpg",
    imageUrl: "./assets/images/14.jpg",
    description: "Aloysious Toddle, Gentleman.",
  },
  {
    id: 15,
    thumbnailUrl: "./assets/images/15.jpg",
    imageUrl: "./assets/images/15.jpg",
    description: "Sareem Fediz, of the Fediz Clan Dynasty.",
  },
  {
    id: 16,
    thumbnailUrl: "./assets/images/16.jpg",
    imageUrl: "./assets/images/16.jpg",
    description: "Grimps, Invetor Extratordanire.",
  },
  {
    id: 17,
    thumbnailUrl: "./assets/images/17.jpg",
    imageUrl: "./assets/images/17.jpg",
    description: "Morris Curd, hard candy afficioando.",
  },
  {
    id: 18,
    thumbnailUrl: "./assets/images/18.jpg",
    imageUrl: "./assets/images/18.jpg",
    description: "Officer Earwicker.",
  },
  {
    id: 19,
    thumbnailUrl: "./assets/images/19.jpg",
    imageUrl: "./assets/images/19.jpg",
    description: "Into the sequel, Moon of the Popping Trees.",
  },
  {
    id: 20,
    thumbnailUrl: "./assets/images/20.jpg",
    imageUrl: "./assets/images/20.jpg",
    description: "The Universal.",
  },
  {
    id: 21,
    thumbnailUrl: "./assets/images/21.jpg",
    imageUrl: "./assets/images/21.jpg",
    description:
      "Cover image for the spin-off novel, Newton Freberg and the Dread Demons of Paris. ",
  },
  {
    id: 22,
    thumbnailUrl: "./assets/images/22.jpg",
    imageUrl: "./assets/images/22.jpg",
    description:
      "Newton Freberg, the World's Youngest Detective™, as he appears in his spin off novel, The Dread Demons of Paris. ",
  },
  {
    id: 23,
    thumbnailUrl: "./assets/images/23.jpg",
    imageUrl: "./assets/images/23.jpg",
    description: "The mysterious Constance Fontaine.",
  },
  {
    id: 24,
    thumbnailUrl: "./assets/images/24.jpg",
    imageUrl: "./assets/images/24.jpg",
    description: "Mr. Bachsus, as he appears in the Dread Demons of Paris.",
  },
  {
    id: 25,
    thumbnailUrl: "./assets/images/25.jpg",
    imageUrl: "./assets/images/25.jpg",
    description:
      "Dr. Moorlander, former Night Squire, and now rival to Mr. Bachsus.",
  },
  {
    id: 26,
    thumbnailUrl: "./assets/images/26.jpg",
    imageUrl: "./assets/images/26.jpg",
    description: "Damon Pierce, heartbreaker.",
  },
  {
    id: 27,
    thumbnailUrl: "./assets/images/27.jpg",
    imageUrl: "./assets/images/27.jpg",
    description: "Aloysius Toddle, as he appears in the Dread Demons of Paris.",
  },
  {
    id: 28,
    thumbnailUrl: "./assets/images/28.jpg",
    imageUrl: "./assets/images/28.jpg",
    description: "The vile Ekabod Morose.",
  },
  {
    id: 29,
    thumbnailUrl: "./assets/images/29.jpg",
    imageUrl: "./assets/images/29.jpg",
    description: "Parisian tailor, Fabrice Trabeau.",
  },
];

export default cardData;
