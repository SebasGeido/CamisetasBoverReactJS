import './Navbar.css'
import CartWidget from './CartWidget.js'
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
                  <a className='nav-link active' aria-current="page" href="../">Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="#">Boca</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="#">River</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          );
}
export default Navbar;