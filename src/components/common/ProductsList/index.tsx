import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { PAGE_ROUTES } from 'consts';
import { IProduct } from 'types';
import useCart from 'hooks/useCart';

import ProductsListItem from 'components/common/ProductsList/components/ProductsListItem';
import { ICartProductItem } from 'context/CardContext/CartContext';

type ProductsListProps = {
  isCart: boolean;
  products: (ICartProductItem | IProduct)[];
};

const ProductsList = ({ products, isCart }: ProductsListProps) => {
  const navigate = useNavigate();
  const { removeProduct, increaseQuantity, decreaseQuantity } = useCart();

  const handleItemClick = useCallback((id: number) => {
    navigate(`${PAGE_ROUTES.PRODUCT}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    if (isCart) {
      removeProduct(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDecreaseQuantity = useCallback((id: number) => {
    decreaseQuantity(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIncreaseQuantity = useCallback((id: number) => {
    increaseQuantity(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!products.length) {
    return <h1>It is empty</h1>;
  }
  
  return (
    <ul>
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          product={product}
          isCart={isCart as boolean}
          onRemoveClick={handleRemoveClick}
          onItemClick={handleItemClick}
          onDecreaseQuantity={handleDecreaseQuantity}
          onIncreaseQuantity={handleIncreaseQuantity}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
