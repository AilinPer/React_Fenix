import React, { createContext, useState } from 'react'

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])

  const addToCarrito = (item) => {
    setCarrito((prevCarrito) => [...prevCarrito, { ...item, cantidad: 1 }])
    const itemExist = carrito.find((cartItem) => cartItem.id === item.id)

    if (itemExist) {
      setCarrito((prevCarrito) =>
        prevCarrito.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, cantidad: cartItem.cantidad  } : cartItem
        )
      )
     } 
  }
  const limpiarCarrito = () => {
    setCarrito([])
  }

  return (
    <CarritoContext.Provider value={{ carrito, addToCarrito, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContext