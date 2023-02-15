import { IProduct } from "index.d";

const products: IProduct[] = [
  {
    id: 1,
    price: 32.95,
    title: "Red Plate",
    code: "R01",
    unit: "USD",
    color: "#f44336",
    img: "https://freepngimg.com/thumb/food/139184-food-plate-healthy-free-photo.png",
  },
  {
    id: 2,
    price: 24.95,
    title: "Green Plate",
    code: "G01",
    unit: "USD",
    color: "#43a047",
    img: "https://www.seekpng.com/png/full/296-2968423_shawarma-plate-png-italian-food-plate-png.png",
  },
  {
    id: 3,
    price: 7.95,
    title: "Blue Plate",
    code: "B01",
    unit: "USD",
    color: "#0288d1",
    img: "https://freepngimg.com/download/food/139178-food-plate-diet-free-transparent-image-hd.png",
  },
];

const campaings = [
  {
    products: ["R01"],
    discount: 0.5,
    min: 2,
    describe: "2. Plate 50% Off",
  },
];

const conditions = [
  {
    id: 1,
    low: 90,
    hight: -1,
    delivery: 0,
  },
  {
    id: 2,
    low: 50,
    hight: 89,
    delivery: 2.95,
  },
  {
    id: 3,
    low: 0,
    hight: 49,
    delivery: 4.95,
  },
];

export { products, conditions, campaings };
