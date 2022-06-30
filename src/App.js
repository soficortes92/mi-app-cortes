// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './Components/ListContainer';
import Body from './Components/Body';

function App() {
  return (
    <div>
      <NavBar />
      <ListContainer />
      <Body />
    </div>
  );
}

export default App;