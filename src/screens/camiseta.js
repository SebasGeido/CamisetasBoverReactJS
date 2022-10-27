/*import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {getObjectByID} from "../APIrest/productos.js";
import Navbar from "../Components/Navbar.js";
const camiseta = () => {
    const{ID} = useParams();
    const [camiseta, setCamiseta] = useState({})
    useEffect(() => {
        setCamiseta(getObjectByID(ID))
    });
    return(
        <div>
            <Navbar/>
            <div>
                <div className="catalogo">
                    <div className="containerArticulo">
                        <img className="IMGcamiseta" alt={`Camiseta: {camiseta.Nombre}`}/> src=""
                        `${camiseta.Nombre}` <br/> ${camiseta.Precio} <br/> {camiseta.descripcion}
                        <img></img>
            </div>
        </div>
        </div>
        </div>
    )
}
export default camiseta;*/