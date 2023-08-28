import { createContext, useState } from 'react';

import { IProduct } from 'types';

export interface ICartProductItem extends IProduct {
  quantity: number;
}

interface ICartContext {
  items: ICartProductItem[];
  addProduct: (product: IProduct) => void;
  removeProduct: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  checkIsAlreadyInCart: (productId: number) => boolean;
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

  const increaseQuantity = (productId: number) => {
    setCartItems((cartItems) =>
      cartItems.map((cartItem) => {
        if (cartItem.id === productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      })
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCartItems((cartItems) =>
      cartItems.map((cartItem) => {
        if (cartItem.id === productId) {
          cartItem.quantity - 1 === 0 && removeProduct(productId);
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })
    );
  };

  const checkIsAlreadyInCart = (productId: number) => {
    return cartItems.some((cartItem) => cartItem.id === productId);
  };

  return (
    <CardContext.Provider
      value={{
        items: cartItems,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
        checkIsAlreadyInCart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;
