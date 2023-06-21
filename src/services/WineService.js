import AsyncStorage from "@react-native-async-storage/async-storage";

const WINES = [
  {
    id: 1,
    name: "Merlot",
    type: "Rosu",
    description: "Merlot este un vin cu un corp mediu si aciditate moderata",
    price: 26.0,
    image: require("../../assets/wine_images/Merlot.jpeg"),
  },
  {
    id: 2,
    name: "Chardonnay",
    type: "Alb",
    description:
      "In esenta, vinul Chardonnay este un vin alb corpolent, onctuos, cu arome bogate de fructe",
    price: 44.0,
    image: require("../../assets/wine_images/Chardonnay.jpg"),
  },
  {
    id: 3,
    name: "Sauvignon Blanc",
    type: "Alb",
    description:
      "Sec, demisec sau dulce, Sauvignon blanc este un vin cu multa viata, placut, acid si aromat",
    price: 49.43,
    image: require("../../assets/wine_images/Sauvignon_Blanc.jpg"),
  },
  {
    id: 4,
    name: "Pinot Noir",
    type: "Rosu",
    description:
      "Cand este tanar, Pinot Noir ofera simple caracteristici de cirese, prune si capsuni. Pe masura ce devine mai matur, caracteristicile sale devin mai complexe, incluzand stafide, fan, tutun, piele, ciuperci sau piper negru",
    price: 38.6,
    image: require("../../assets/wine_images/Pinot_Noir.jpg"),
  },
  {
    id: 5,
    name: "Chenin Blanc",
    type: "Alb",
    description: "Vinul este dulce cu arome fructate",
    price: 45.34,
    image: require("../../assets/wine_images/Chenin_Blanc.jpg"),
  },
  {
    id: 6,
    name: "Shiraz",
    type: "Rosu",
    description:
      "Shiraz este un celebru vin rosu australian, cu un continut ridicat de alcool, dar si de antioxidanti",
    price: 49.77,
    image: require("../../assets/wine_images/Shiraz.jpg"),
  },
  {
    id: 7,
    name: "Lambrusco",
    type: "Rosu",
    description:
      "Vin rosu spumant cu perlaj fin si note intrigante de fructe rosii",
    price: 27.9,
    image: require("../../assets/wine_images/Lambrusco.jpg"),
  },
  {
    id: 8,
    name: "Cabernet Sauvignion",
    type: "Rosu",
    description:
      "Vinul este inchis la culoare, cu o nuanta de rosu-purpuriu, data de cantitatea impresionanta de antioxidanti pe care ii contine. Este opac si are gust puternic si acid",
    price: 27.0,
    image: require("../../assets/wine_images/Cabernet_Sauvignon.jpg"),
  },
  {
    id: 9,
    name: "Moscato",
    type: "Alb",
    description:
      "Moscato are gust fructat, cu aroma puternica de grepfruit si e usor de recunoscut printre degustatori",
    price: 23.0,
    image: require("../../assets/wine_images/Moscato.jpg"),
  },
  {
    id: 10,
    name: "Riesling",
    type: "Alb",
    description:
      "Riesling este un vin aromat, fructat, care isi are originea in Germania, insa la noi in tara este mai cunoscut Rieslingul Italian, un vin mai degraba sec si sobru",
    price: 45.0,
    image: require("../../assets/wine_images/Riesling.jpg"),
  },
  {
    id: 11,
    name: "Rosadio",
    type: "Rose",
    description:
      "Este un vin aromatic intens, dar elegant si subtil. Arome de anason si ierburi, insa vom simti si note de capsuni si coacaze negre",
    price: 30.0,
    image: require("../../assets/wine_images/Rosadio.jpg"),
  },
  {
    id: 12,
    name: "Pinot Grigio",
    type: "Alb",
    description: "Vinul este sec, cu gust puternic si acid, cu arome fructate",
    price: 27.0,
    image: require("../../assets/wine_images/Pinot_Grigio.jpg"),
  },
];

export function getWines() {
  return WINES;
}

export function getWine(id) {
  return WINES.find((wine) => wine.id == id);
}
