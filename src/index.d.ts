export interface IProduct {
  id: number;
  price: number;
  title: string;
  code: string;
  unit: string;
  color: string;
  img: string;
}

export interface IProductItem {
  product: IProduct;
}

export interface IMenu {
  products: IProduct[];
}
