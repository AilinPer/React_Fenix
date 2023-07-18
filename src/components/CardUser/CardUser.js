import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardUser.css"


const CardUser = ({char, showDescription}) =>  {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="libros"
        height="450"
        image={char.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {char.nombre}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ${char.precio} | {char.categoria}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {showDescription && <p className='desc'>{char.descripcion}</p>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' backgroundColor= '#0063cc' size="large">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default CardUser