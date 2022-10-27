import camisetas from "../APIrest/productos";
import './Item.css'
import { Link } from "react-router-dom";
function ItemListContainer() {
return (
    <div className="catalogo">
        {camisetas.map((camiseta, i) => (
        <Link to={`/camiseta/${camiseta.id}`}>
            <div llave={i} className="containerArticulo">
                <img className="IMGcamiseta" alt={`${camiseta.Nombre}`} src={camiseta.link}></img>
            {camiseta.Nombre} <br/> ${camiseta.Precio}
            </div>
        </Link>

            ))
        }
    </div>
)
}
export default ItemListContainer;