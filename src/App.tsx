import './App.css'

import CartProvider from 'context/CardContext/CartContext';
import Routes from 'components/Routes';

function App() {
  return (
    <CartProvider>
      <Routes/>
    </CartProvider>
  );
}

export default App;
