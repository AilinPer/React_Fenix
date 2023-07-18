import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const carrito1 = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png" 
    return (
        <div className='carrito'>
            <img src= {carrito1} alt='carrito'/>
            <p className='numero'>5</p>
        </div>
    )
}

export default CardWidget