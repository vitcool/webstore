import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import ProductsListPage from 'components/ProductsListPage';
import ProductPage from 'components/ProductPage';
import CartPage from 'components/CartPage';

import { PAGE_ROUTES } from 'consts';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={PAGE_ROUTES.PRODUCTS_LIST} element={<ProductsListPage />} />
        <Route
          path={`${PAGE_ROUTES.PRODUCT}/:productId`}
          element={<ProductPage />}
        />
        <Route path={`${PAGE_ROUTES.CART}`} element={<CartPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
