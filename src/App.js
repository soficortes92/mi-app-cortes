// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Components/Welcome';
import Body from './Components/Body';

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Body />
    </div>
  );
}

export default App;