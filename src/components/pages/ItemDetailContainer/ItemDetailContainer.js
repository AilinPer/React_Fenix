import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../../CardUser/CardUser'
import "./ItemDetailContainer.css"

//firebase
import { db } from "../../../firebase/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [libros, setLibros] = useState({})
  let { id } = useParams()

  useEffect(() => {
    const getLibros = async () => {
      try{
        const q = doc(db, 'libros', id)
        const querySnapshot = await getDoc(q)

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
      {libros.id ? <CardUser data={libros} showDescription={true} /> : null}
    </div>
  )
}

export default ItemDetailContainer