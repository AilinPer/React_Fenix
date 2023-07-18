import React, {useState, useEffect} from 'react'
import CardUser from "../CardUser/CardUser"
import "./ItemListContainer.css"

import {Link} from "react-router-dom"

const ItemListContainer = () => {
    const [chars, setChars] = useState([])

    console.log(setChars, chars)
    console.log(process.env)

    useEffect(() =>{
        fetch('/productos.json')
        .then((Response) => Response.json())
        .then((json) => setChars(json.resultado))
    },[])


    return (
        <div className='tarjeta-diseño'>
            {chars.map((char) => {
                return(
                    <div key ={char.id}>
                        <Link to={`detail/${char.id}`}>
                            <CardUser char = {char}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemListContainer