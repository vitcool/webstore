import { memo } from 'react';

import { ICartProductItem } from 'context/CardContext/CartContext';
import { IProduct } from 'types';

type IProductItemProps = {
  product: ICartProductItem | IProduct;
  isCart: boolean;
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
  }: IProductItemProps) => {
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
      <li>
        <p onClick={handleItemClick}>{title}</p>
        {isCart && 'quantity' in product && (
          <div>
            <button onClick={handleRemoveClick}>remove from cart</button>
            <div>
              <button onClick={handleIncreaseQuantityClick}>+</button>
              <span>{product.quantity || ''}</span>
              <button onClick={handleDecreaseQuantityClick}>-</button>
            </div>
          </div>
        )}
      </li>
    );
  }
);

export default ProductsListItem;
