import React, { useState } from 'react'
import './ContactoPages.css'

const ContactoPages = () => {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [opinion, setOpinion] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="formulario-opinion">
      {enviado ? (
        <div className="mensaje-exito">
          <p className='agradecimiento'>¡Gracias por tu opinión!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Deja tu opinión</h2>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="opinion">Opinión:</label>
          <textarea
            id="opinion"
            name="opinion"
            value={opinion}
            onChange={(e) => setOpinion(e.target.value)}
            rows="4"
            required
          />

          <button type="submit">Enviar opinión</button>
        </form>
      )}
    </div>
  )
}

export default ContactoPages