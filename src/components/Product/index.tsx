import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { PAGES } from "../Routes";

// todo: move to constants
const PRODUCT_URL = 'https://fakestoreapi.com/products';

// todo: move to types
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
}

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const { addProduct } = useCart();


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${PRODUCT_URL}/${productId}`);
      const json = await response.json();
      setProduct(json);
    }

    fetchProducts();
  }, [productId]);

  if (product === undefined) {
    return <h1>Loading...</h1>
  }

  const handleBuyClick = () => {
    addProduct(product);
  }

  const { title, description, price } = product;

    return (
        <div>
            <h1>Product: {title}</h1>
            <p>{description}</p>
            <span>{price}</span>
            <button onClick={handleBuyClick}>Buy</button>
            <Link to={PAGES.CART}>CART</Link>
        </div>
    )
}

export default Product;