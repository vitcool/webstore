import useCart from "../../hooks/useCart";
import ListOfProducts from "../ListOfProducts";

const Cart = () => {
  const { products } = useCart();

  return (
    <>
      <h1>Cart</h1>
      <ListOfProducts products={products} />
    </>
    
  )
}

export default Cart;