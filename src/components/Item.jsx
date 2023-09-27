import React from "react"
import { Link } from "react-router-dom"

const Item = ( {producto} ) => {
    return(
        <div className="producto">
            <img src={producto.imagen} />
            <div>
                <h4>{producto.titulo}</h4>
            </div>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link to={`/item/${producto.id}`} className="ver-mas">Ver mas</Link>
        </div>
    )
}

export default Item