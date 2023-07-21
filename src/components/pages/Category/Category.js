import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from "../../CardUser/CardUser"
import "./Category.css"

//firebase
import { db } from "../../../firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"

const Category = () => {
    const [libros, setLibros] = useState([])
    let {categoriaid} = useParams()

    useEffect(() => {
        const getLibros = async () => {
          const q = query(
            collection(db, 'libros'),
            where('categoria', '==', categoriaid)
          )
    
          try {
            const querySnapshot = await getDocs(q)
            const charData = querySnapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
            setLibros(charData);
          } catch (error) {
            console.error('Error al obtener los documentos:', error)
          }
        }
    
        getLibros()
      }, [categoriaid])
    
      return (
        <div className='tarjeta-diseño1'>
          {libros.map((libro) => (
            <div key={libro.id}>
              <CardUser data={libro} />
            </div>
          ))}
        </div>
      )
    }

export default Category