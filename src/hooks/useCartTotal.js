import React from "react";
import { campaings, deliveries } from "@constants";
import { useAppSelector } from "@store/store";

const useCartTotal = () => {
  const { cart } = useAppSelector((state) => state.cart);

  const cartTotal = React.useMemo(() => {
    const cartSummary = {
      total: 0,
      delivery: 4.95,
      discount: 0,
    };

    for (const prod of cart) {
      const { price, qty } = prod;
      cartSummary.total += price * qty;

      for (const campaign of campaings) {
        const { discount, min } = campaign;

        if (campaign.products.includes(prod.code)) {
          const times = Math.floor(qty / min);
          cartSummary.discount += times * (price * discount).toFixed(2);
        }
      }
    }

    // aplies campaings discounts

    cartSummary.total -= cartSummary.discount;

    // applies deliveries discounts
    for (const prod of deliveries) {
      const { price, delivery } = prod;
      if (cartSummary.total > price) {
        cartSummary.delivery = delivery;
      }
    }

    cartSummary.total += cartSummary.delivery;
    return cartSummary;
  }, [cart]); // eslint-disable-line react-hooks/exhaustive-deps

  return cartTotal;
};

export default useCartTotal;
