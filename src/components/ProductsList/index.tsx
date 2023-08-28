import React, { useEffect } from 'react';

import ListOfProducts from '../ListOfProducts';
import { IProduct } from '../Product';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';


const ProductsList = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(PRODUCTS_URL);
      const json = await response.json();
      setProducts(json);
    }

    fetchProducts();
  }, []);
  
  return (
    <div>
      <h1>Products List</h1>
      <ListOfProducts products={products} ></ListOfProducts>

    </div>
  );
};

export default ProductsList;