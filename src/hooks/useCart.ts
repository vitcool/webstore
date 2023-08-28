import { useContext } from "react";

import { CardContext } from "context/CardContext/CartContext";

const useCart = () => {
  const cart = useContext(CardContext);

  if (!cart) {
    throw new Error(
      "useCart has to be used within <CardContext.Provider>"
    );
  }

  return cart;
}

export default useCart;