import { createContext, useState } from "react";

import { IProduct } from "../../components/Product";

interface ICart {
  products: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
}

export const CardContext = createContext<ICart>({} as ICart);// remove casting, add quantity to product, move router to level up

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct) => {
    setCartProducts((products) => [...products, product]);
  };

  const removeProduct = (productId: number) => {
    setCartProducts((products) => products.filter((product) => product.id !== productId));
  };

  return (
    <CardContext.Provider value={{products: cartProducts, addProduct, removeProduct}}>
      {children}
    </CardContext.Provider>
  )
}

export default CartProvider;
