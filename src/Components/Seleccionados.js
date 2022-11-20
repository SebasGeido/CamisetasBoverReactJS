import camisetas from "../APIrest/productos";

function Seleccion() {
    return (
        camisetas.map((camiseta, i) => (
                <div llave={i}>
                        <span>{camiseta.Nombre}: {camiseta.carrito}</span>
                </div>
            ))
    )
}
export default Seleccion