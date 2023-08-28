import { createContext, useState } from 'react';

import { IProduct } from 'types';

export interface ICartProductItem extends IProduct {
  quantity: number;
}

interface ICartContext {
  items: ICartProductItem[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
}

export const CardContext = createContext<ICartContext | null>(null);
// remove casting, add quantity to product, move router to level up

interface ICartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItems, setCartItems] = useState<ICartProductItem[]>([]);

  const addProduct = (product: IProduct) => {
    setCartItems((items) => [...items, { ...product, quantity: 1 }]);
  };

  const removeProduct = (productId: number) => {
    setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.id !== productId)
    );
  };

  return (
    <CardContext.Provider
      value={{ items: cartItems, addProduct, removeProduct }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;
