import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { PAGE_ROUTES } from 'consts';
import { IProduct } from 'types';
import useCart from 'hooks/useCart';

import ProductsListItem from 'components/common/ProductsList/components/ProductsListItem';
import { ICartProductItem } from 'context/CardContext/CartContext';

type ProductsListProps =
  | {
      isCart: true;
      products: ICartProductItem[];
    }
  | {
      isCart: false;
      products: IProduct[];
    };

const ProductsList = ({ products, isCart }: ProductsListProps) => {
  const navigate = useNavigate();
  const { removeProduct } = useCart();

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

  return (
    <ul>
      {products.map((product) => (
        <ProductsListItem
          key={product.id}
          product={product}
          isCart={isCart}
          onRemoveClick={handleRemoveClick}
          onItemClick={handleItemClick}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
