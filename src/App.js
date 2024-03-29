// import logo from './logo.svg';
// import './App.css';
import NavBar from './Components/Navbar/NavBar';
import ListContainer from './Components/ItemListContainer/ListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import Form from './Components/Form';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index path="/" element={<ListContainer />} />
          <Route path="/item/:idItems" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryItems" element={<ListContainer />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
