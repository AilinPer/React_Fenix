/*import React from 'react'*/
import "./Navbar.css"
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
          setAnchorEl(null);
        };
    return (
        <nav className='Nav'>
            <ul>
                <Link className='li' to="/"> INICIO </Link>
                <Button size="large"  style={{ color: '#fff', fontSize:"1.5rem"}}
                    onClick={handleClick}
                >
                    Filtrado
                </Button>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'lock-button',
                      role: 'listbox',
                    }}
                >
                    <MenuItem>
                        <Link className='menu' to="/Category/fantasia"> Fantasia </Link> 
                    </MenuItem>
                    <MenuItem >
                        <Link className='menu' to="/Category/terror"> Terror </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link className='menu' to="/Category/ciencia ficcion"> Ciencia-Ficción </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link className='menu' to="/Category/aventura"> Aventura </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link className='menu' to="/Category/romance"> Romance </Link>
                    </MenuItem>
                    <MenuItem >
                        <Link className='menu' to="/Category/mitologia"> Mitologia </Link>
                    </MenuItem>
                </Menu>
                <Link className='li' to="/Contacto"> CONTACTO </Link>
                <Link className='li' to="/Carrito"> <CardWidget/> </Link>
            </ul>
        </nav>
    )
}
export default Navbar