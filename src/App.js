import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Client from './components/Clients'
import Clients from './components/Clients';
import Price from './components/Price';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Shop/>
      <Menu/>
      <Clients/>
      <Price/>
    </div>
  );
}

export default App;
