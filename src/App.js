import './App.css';
import Navbar from './Components/Navbar'; 
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className='contenedorPrincipal'>
      <div className='header'>
      <Navbar/>
      </div>
    <div className='card'>
      <ItemListContainer msg = '¡Bienvenido a Camisetas Bover! Las mejores camisetas al mejor precio' />
    </div>
    </div>
    )
}

export default App;
