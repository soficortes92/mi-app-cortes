// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './Components/ListContainer';
import Body from './Components/Body';
import ItemDetailContainer from './Components/ItemDetailContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ListContainer />
      <ItemDetailContainer />
      <Body />
    </div>
  );
}

export default App;