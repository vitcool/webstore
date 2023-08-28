import { Link } from 'react-router-dom';

import { IProduct } from 'types';
import { PAGE_ROUTES, PRODUCTS_URL } from 'consts';
import useFetch from 'hooks/useFetch';
import ProductsList from 'components/common/ProductsList';

const ProductsListPage = () => {
  const { data: products, loading: isLoading } =
    useFetch<IProduct[]>(PRODUCTS_URL);

  if (isLoading || !products) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Products List</h1>
      <ProductsList products={products} isCart={false}></ProductsList>
      <Link to={PAGE_ROUTES.CART}>GO TO CART</Link>
    </div>
  );
};

export default ProductsListPage;
