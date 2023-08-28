import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import ProductsList from '../ProductsList';
import Product from '../Product';
import Cart from '../Cart';

export const PAGES = {
  PRODUCTS_LIST: '/',
  PRODUCT: '/product',
  CART: '/cart',
}

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={PAGES.PRODUCTS_LIST} element={<ProductsList/>} />
        <Route path={`${PAGES.PRODUCT}/:productId`} element={<Product/>} />
        <Route path={`${PAGES.CART}`} element={<Cart/>} />
      </ReactRoutes>
    </BrowserRouter>
  )
}

export  default Routes;