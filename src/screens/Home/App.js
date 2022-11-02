import './App.css';
import Navbar from '../../Components/Navbar'; 
import ItemListContainer from '../../Components/ItemListContainer';

function App() {
  return (
    <div className='contenedorPrincipal'>
      <div className='header'>
      <Navbar/>
      </div>
      <ItemListContainer/>
    </div>
    ) 
}

export default App;
