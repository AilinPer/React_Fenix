import React from "react";
import  {useState, useEffect} from 'react'
import CardUser from "../CardUser/CardUser"
import "./ItemListContainer.css"

import {Link} from "react-router-dom"

//firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from "firebase/firestore"

const ItemListContainer = () =>{
    const [libros, setLibros] = useState([])

    useEffect(() => {
        const getLibros = async() => {
        const q = query(collection(db, "libros"))
        const docs = []
        const querySnapshot = await getDocs(q)
        //console.log(querySnapShot)
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data())
            docs.push({ ...doc.data(), id:doc.id})
        });
        setLibros(docs)
    }
    getLibros()
  }, [])
    return (
        <div className='tarjeta-diseño'>
            {libros.map((libro) => {
            return (
            <div key={libro.id}>
                <Link to={`detail/${libro.id}`}>
                <   CardUser data={libro} />
                </Link>
            </div>
            )
            })}
        </div>
    )
}

  
export default ItemListContainer