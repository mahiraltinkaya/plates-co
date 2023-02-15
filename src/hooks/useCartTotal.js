import React from "react";
import { campaings, rules } from "@constants";
import { useSelector } from "@store";

const useCartTotal = () => {
  const cart = useSelector((state) => state.cart);

  const accumulator = (acc, item) => {};

  const cartTotal = React.useMemo(() => {
    let total = cart.reducer(accumulator);

    return total;
  }, [cart]);

  const getCartTotal = (cart) => {
    return cartTotal;
  };

  return getCartTotal;
};

export default useCartTotal;
