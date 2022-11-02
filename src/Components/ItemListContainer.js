import camisetas from "../APIrest/productos";
import './Item.css'
import { Link, useParams,} from "react-router-dom";
import { useState } from "react";
function ItemListContainer() {
    const [filter, setFilter] = useState("");
    const {club} = useParams();
return (
    <div className="catalogo"  onChange={(event) => setFilter(event.target.value)}>
        {club? camisetas
        .filter((shirt) => shirt.club === club)
        .map((camiseta, i) => (
            <Link to={`/camiseta/${camiseta.id}`}>
                <div llave={i} className="containerArticulo">
                    <img className="IMGcamiseta" alt={`${camiseta.Nombre}`} src={camiseta.link}></img>
                    {camiseta.Nombre} <br/> ${camiseta.Precio}
                </div>
            </Link>
         ))
         :
         camisetas
            .map((camiseta, i) => (
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