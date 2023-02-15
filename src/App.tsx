import { useLayoutEffect, useState } from "react";
import HeaderComponent from "components/HeaderComponent";
import BannerImage from "components/BannerImage";
import MenuRenderer from "components/MenuRenderer";
import FooterComponent from "components/FooterComponent";
import { GlobalContext } from "@context/GlobalContext";
import LoadingComponent from "components/LoadingComponent";

import CartComponent from "components/CartComponent";

import { IProduct } from "index.d";

import productApi from "@api/productAPI";

function App() {
  const [cartToggle, setCartToggle] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  useLayoutEffect(() => {
    productApi.get().then((res: IProduct[]) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{
          cartToggle,
          setCartToggle,
        }}
      >
        {cartToggle && <CartComponent></CartComponent>}
        <HeaderComponent />
        <BannerImage />
        {products.length > 0 && <MenuRenderer products={products} />}
        {products.length === 0 && <LoadingComponent></LoadingComponent>}
        <FooterComponent />
      </GlobalContext.Provider>
    </>
  );
}

export default App;
