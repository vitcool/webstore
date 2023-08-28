import { memo } from 'react';

import { ICartProductItem } from 'context/CardContext/CartContext';
import { IProduct } from 'types';

type ProductItemProps = (
  | {
      isCart: true;
      product: ICartProductItem;
    }
  | {
      isCart: false;
      product: IProduct;
    }
) & {
  onItemClick: (id: number) => void;
  onRemoveClick?: (id: number) => void;
  onIncreaseQuantity?: (id: number) => void;
  onDecreaseQuantity?: (id: number) => void;
};

const ProductsListItem = memo(
  ({
    product,
    isCart,
    onRemoveClick,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onItemClick,
  }: ProductItemProps) => {
    const { id, title } = product;

    const handleItemClick = () => {
      onItemClick(id);
    };

    const handleRemoveClick = () => {
      onRemoveClick && onRemoveClick(id);
    };

    const handleIncreaseQuantityClick = () => {
      onIncreaseQuantity && onIncreaseQuantity(id);
    };

    const handleDecreaseQuantityClick = () => {
      onDecreaseQuantity && onDecreaseQuantity(id);
    };

    return (
      <li onClick={handleItemClick}>
        {title}
        {isCart && (
          <>
            <button onClick={handleRemoveClick}>remove from cart</button>
            <div>
              <button onClick={handleIncreaseQuantityClick}>+</button>
              <span>{product.quantity}</span>
              <button onClick={handleDecreaseQuantityClick}>+</button>
            </div>
          </>
        )}
      </li>
    );
  }
);

export default ProductsListItem;
