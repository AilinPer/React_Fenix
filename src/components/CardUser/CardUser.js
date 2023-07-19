import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardUser.css"


const CardUser = ({data, showDescription}) =>  {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="libros"
        height="450"
        image={data.img}
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
        <Button variant='contained' backgroundColor= '#0063cc' size="large">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default CardUser