import { useContext } from "react";
import { CardContext } from "../context/CardContext/CartContext";

const useCart = () => {
  const cart = useContext(CardContext);

  return cart;
}

export default useCart;