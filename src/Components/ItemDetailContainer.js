import camisetas from "../APIrest/productos";
import './Item.css';
import {useParams} from "react-router-dom";
import Navbar from "./Navbar";
function ItemDetailContainer () {
    const {id} = useParams();
    return (
        <div>
            <Navbar/>
            <div className="catalogo">
                <div className="containerArticulo">
                    <img className="IMGcamiseta" alt={`Camiseta: ${camisetas[id].Nombre}`} src={camisetas[id].link}></img>
              {camisetas[id].Nombre} <br/> ${camisetas[id].Precio} <br/> {camisetas[id].descripcion}
                </div>
            </div>
            </div>
    )
}
export default ItemDetailContainer;
