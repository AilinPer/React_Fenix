import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./CardUser.css"

const CardUser = ({char}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia className='libros'
          component="img"
          image={char.img}
          alt="imagenes de los libros"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {char.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${char.precio} | {char.categoria}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardUser