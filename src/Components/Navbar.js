import './Navbar.css'
import CartWidget from './CartWidget.js'
import {Link} from 'react-router-dom';
import botones from '../APIrest/botones';
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
};
function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <CartWidget />
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarNav">
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to={`/`} style={linkStyle}>
                    <span>Home</span>
                  </Link>
                </li>
                {botones
                .map((boton,i) => (
                <li llave={i} className='nav-item'>
                <Link to={`/club/${boton.club}`} style={linkStyle}>
                  {boton.club}
                </Link>
                </li>
                ))}
                <li>
                  <Link to={`/carrito/`}>🛒Carrito</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          );
}
export default Navbar;