import React, { useContext } from "react";
import CarritoContext from "../CarritoContext/CarritoContext";
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import "./CardUser.css"

const CardUser = ({data, showDescription}) =>  {
  const {addToCarrito} = useContext(CarritoContext)
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="libros"
        //height="450"
        width="400"
        image={data.img} style={{ width: '350px', alignContent:"center" }} 
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data.nombre} 
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ${data.precio} | {data.categoria} 
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {showDescription && <p className='desc'>{data.descripcion}</p>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' style={{BackgrundColor:'#0063cc'}} size="large" onClick={() => addToCarrito(data)}>Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default CardUser