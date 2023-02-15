import { products } from "@constants";

class ProductAPI {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }
}

const instance = new ProductAPI();
export default instance;
