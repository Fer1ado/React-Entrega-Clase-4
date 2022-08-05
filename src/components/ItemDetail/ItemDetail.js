
const ItemDetail = ({name, imagen, descripcion, stock}) => {
    return(
        <>
        <img src={imagen} alt={imagen}/>
        <h1>{name}</h1>
        <p>{descripcion}</p>
        <p>Unidades Disponibles: {stock}</p>
        </>
    )
}

export default ItemDetail