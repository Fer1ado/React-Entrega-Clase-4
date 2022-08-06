import Counter from "../Counter/Counter"
import itemDetail from "./ItemDetail.css"
import {useState} from "react"

const ItemDetail = ({name, imagen, descripcion, stock, id}) => {
    const [count, setCount] = useState(0)

    const sumaCarro = (cantidad) => {
        if(count < stock){
        setCount (count + cantidad)}
    }

    return(
        <>
        <div className="zoomup card-imgage "><img src={imagen} alt={imagen}/>
        <h1><span className="card-title">{name}</span></h1>
        </div>

        <div className="content">
        <blockquote>{descripcion}</blockquote>
        <h6>Unidades Disponibles: {stock} </h6>
        <h5>Unidades Agreegadas al Carrito: <b>{count}</b></h5>
        <Counter stock={stock} key={id} agregar={sumaCarro} />
        </div>
        </>
    )
}

export default ItemDetail