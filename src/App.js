// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ListContainer from './Components/ListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer />
      <ListContainer />
      
    </div>
  );
}

export default App;