import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../../CardUser/CardUser'
import "./ItemDetailContainer.css"

//firebase
import { db } from "../../../firebase/firebaseConfig"
import { doc, getDocs } from "firebase/firestore"

//  const ItemDetailContainer = () => {
//    const [char, setChar] = useState({})

//  let { id } = useParams()

//  useEffect(() =>{
//    fetch('/productos.json')
//    .then((Response) => Response.json())
//    .then((json) => setChar(json.resultado.find(item => item.id === parseInt(id))))
//  },[id])

//    return (
//      <div className='tarjeta-detalle'>
//        {
//          data.id ? <CardUser char={data} showDescription={true} /> : null
//       }
//      </div>
    
  
//  )
//  }

const ItemDetailContainer = () => {
  const [libros, setLibros] = useState({})
  let { id } = useParams()

  useEffect(() => {
    const getLibros = async () => {
      try{
        const q = doc(db, 'libros', id)
        const querySnapshot = await getDocs(q)

        if (querySnapshot.exists()) {
          setLibros({ ...querySnapshot.data(), id: querySnapshot.id }
          )}
      } catch (error){
        console.log("Error", error)
      }
    }
    getLibros()
  }, [id])

  return (
    <div className='tarjeta-detalle'>
      {libros.id ? <CardUser libros={libros} showDescription={true} /> : null}
    </div>
  )
}

export default ItemDetailContainer