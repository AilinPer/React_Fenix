import React, { useContext } from 'react'
import './CardWidget.css'
import CarritoContext from "../CarritoContext/CarritoContext"

const CardWidget = () => { 
    const {carrito} = useContext(CarritoContext)
    return (
        <div className='carrito'>
            <img src= '/img/carrito-de-compras.png' alt='carrito'/>
            <span>{carrito.length}</span>
        </div>
    )
}

export default CardWidget

// const cartItemCount = cartItems.length
// {cartItemCount > 0 && <span className='cart-count'>{cartItemCount}</span>}