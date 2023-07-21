import React, {useContext, useState} from 'react'
import CarritoContext from '../../CarritoContext/CarritoContext'
import CheckoutForm from '../../Form/Form'
import "./CarritoPages.css"

const CarritoPages = () => {
    const {carrito, limpiarCarrito} = useContext(CarritoContext)
    const [showCheckoutForm, setShowCheckoutForm] = useState(false)

    const handleFinalizarCompra = () => {
        setShowCheckoutForm(true)
    }

    const calcularTotalAPagar = () => {
        return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0)
      };    

    const groupedCarrito = carrito.reduce((acc, item) => {
        const foundItem = acc.find((cartItem) => cartItem.id === item.id)
    
        if (foundItem) {
          foundItem.cantidad += item.cantidad
        } else {
          acc.push({ ...item })
        }
    
        return acc
      }, [])

      const handleCompraExitosa = () => {
        limpiarCarrito()
        setShowCheckoutForm(false)
      }

  return (
    <div >
      <h1>Carrito</h1>
      <table>
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
        {groupedCarrito.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.nombre} style={{ width: '100px' }} />
              </td>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total a pagar: ${calcularTotalAPagar()}</h2>
        <button className='finalizar-compra' onClick={handleFinalizarCompra}>Finalizar Compra</button>
      </div>
        {showCheckoutForm && <CheckoutForm onCompraExitosa={handleCompraExitosa}/>}
      
    </div>
  )
}

export default CarritoPages