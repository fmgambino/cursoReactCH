import Saludo from "../Saludo/Saludo";


function ItemContainer(){
    //llamadas a las props
    return (
        <div>
            <Saludo titulo={'Soy Saludo de componente ItemContainer'} subtitulo='Esto es un subtitulo de container'/>
        
        </div>
    )
}

export default ItemContainer