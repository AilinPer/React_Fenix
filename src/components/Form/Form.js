// CheckoutForm.js
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import "./Form.css"

//firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"

const CheckoutForm = ({ onCompraExitosa }) => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [confirmarCorreo, setConfirmarCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [confirmarTelefono, setConfirmarTelefono] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (correo !== confirmarCorreo || telefono !== confirmarTelefono) {
      alert('Los campos de correo y teléfono deben coincidir.')
      return
    }

    const timestamp = new Date()

    // Guardar la información en Firebase
    try {
      const docRef = await addDoc(collection(db,'libros-seg'), {
        nombre,
        correo,
        telefono,
        timestamp
      })

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tú compra ha sido exitosa',
        text: `Tú número de seguimiento es: ${docRef.id}`,
        showConfirmButton: true,
      })

      onCompraExitosa()

      // Limpiar el formulario después de una compra exitosa
      setNombre('')
      setCorreo('')
      setConfirmarCorreo('')
      setTelefono('')
      setConfirmarTelefono('')
    } catch (error) {
      console.error('Error al guardar la compra:', error)
      alert('Error al realizar la compra. Inténtalo nuevamente.')
    }
  }

  return (
    <div className="checkout-form">
      <h2>Finalizar Compra</h2>
      <form className='formulario' onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="email"
          name="emailConfirm"
          placeholder="Confirmar Correo Electrónico"
          value={confirmarCorreo}
          onChange={(e) => setConfirmarCorreo(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phoneConfirm"
          placeholder="Confirmar Teléfono"
          value={confirmarTelefono}
          onChange={(e) => setConfirmarTelefono(e.target.value)}
          required
        />
        <button type="submit">Finalizar</button>
      </form>
    </div>
  )
}

export default CheckoutForm
