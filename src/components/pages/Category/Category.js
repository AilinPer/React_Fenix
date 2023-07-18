import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from "../../CardUser/CardUser"
import "../../ItemListContainer/ItemListContainer.css"

const Category = () => {
    const [chars, setChars] = useState([])
    let {categoriaid} = useParams()

    console.log(categoriaid)
    console.log(chars)

    let filteredLibros = chars.filter((char) =>{
        return char.categoria === categoriaid
    })

    useEffect(() =>{
        fetch('/productos.json')
        .then((Response) => Response.json())
        .then((json) => setChars(json.resultado))
    },[])

    return (
        <div className='tarjeta-diseño'>
            {filteredLibros.map((char) => {
                return(
                    <div key ={char.id}>
                        <CardUser char = {char}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Category