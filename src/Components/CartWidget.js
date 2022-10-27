import logo from '../assets/bover.png';

function CartWidget() {
    return(
    <a className='navbar-brand' href="#">
        Camisetas 
        <img src={logo} alt="Logo" width="50px" className="d-inline-block align-text-top"></img>
      </a>
    )
}
export default CartWidget;