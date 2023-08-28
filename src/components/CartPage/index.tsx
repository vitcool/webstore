import { useNavigate } from 'react-router-dom';

import useCart from 'hooks/useCart';
import { PAGE_ROUTES } from 'consts';
import ProductsList from 'components/common/ProductsList';

const CartPage = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  const handleGoToProductList = () => {
    navigate(PAGE_ROUTES.PRODUCTS_LIST);
  };

  return (
    <>
      <h1>Cart</h1>
      <ProductsList products={items} isCart />
      <button onClick={handleGoToProductList}>Back to product list</button>
    </>
  );
};

export default CartPage;
