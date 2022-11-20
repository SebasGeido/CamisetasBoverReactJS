import Navbar from "./Navbar";
import Seleccion from "./Seleccionados";
import camisetas from "../APIrest/productos";

function Carrito() {
    return (
        <div>
            <div className='header'>
                <Navbar/>
            </div>
            <Seleccion/>
            <div>
                <span>El total de articulos pedidos es de {camisetas[0].carrito + camisetas[1].carrito + camisetas[2].carrito + camisetas[3].carrito + camisetas[4].carrito + camisetas[5].carrito + camisetas[6].carrito} </span>    
            </div>
        </div>
    )
}

export default Carrito