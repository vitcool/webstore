import { Link, useNavigate, useParams } from 'react-router-dom';

import useCart from 'hooks/useCart';
import useFetch from 'hooks/useFetch';
import { PRODUCTS_URL, PAGE_ROUTES } from 'consts';
import { IProduct } from 'types';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data: product, loading: isLoading } = useFetch<IProduct>(
    `${PRODUCTS_URL}/${productId}`
  );

  const { addProduct, checkIsAlreadyInCart } = useCart();

  if (isLoading || !product) {
    return <h1>Loading...</h1>;
  }

  const handleBuyClick = () => {
    addProduct(product);
  };

  const handleBackClick = () => {
    navigate(PAGE_ROUTES.PRODUCTS_LIST);
  };

  const { title, description, price, id } = product;
  const isAlreadyInCart = checkIsAlreadyInCart(id);

  return (
    <div>
      <button onClick={handleBackClick}>To products list</button>
      <h1>Product: {title}</h1>
      <p>{description}</p>
      <span>{price}</span>
      {isAlreadyInCart ? (
        <p>It's already in the cart, click the following link to check ;)</p>
      ) : (
        <div>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      )}
      <div>
        <Link to={PAGE_ROUTES.CART}>GO TO CART</Link>
      </div>
    </div>
  );
};

export default ProductPage;
