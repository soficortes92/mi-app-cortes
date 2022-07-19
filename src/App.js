// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/NavBar';
import ListContainer from './Components/ItemListContainer/ListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ListContainer />} />
          <Route
            exact
            path="/item/:idItems"
            element={<ItemDetailContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/category/:categoryItems" element={<ListContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
