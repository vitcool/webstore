import './App.css'

import Routes from 'components/Routes';
import CartProvider from 'context/CardContext/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes/>
    </CartProvider>
  );
}

export default App;
