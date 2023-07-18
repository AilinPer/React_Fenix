import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../../CardUser/CardUser'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [char, setChar] = useState({})

let { id } = useParams()

useEffect(() =>{
  fetch('/productos.json')
  .then((Response) => Response.json())
  .then((json) => setChar(json.resultado.find(item => item.id === parseInt(id))))
},[id])

  return (
    <div className='tarjeta-detalle'>
      {
        char.id ? <CardUser char={char} showDescription={true} /> : null
      }
    </div>
      
    
  )
}

export default ItemDetailContainer