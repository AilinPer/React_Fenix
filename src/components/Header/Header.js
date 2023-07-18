import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <header className='logotipo'>
        <Link to="/"><img className='logo' src='/img/logo1.png' alt='imagen'/></Link>
        <h1 className='nombre'>LIBRERIA FENIX </h1>
    </header>
  )
}

export default Header