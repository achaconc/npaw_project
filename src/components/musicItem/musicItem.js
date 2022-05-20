import React from 'react';
import './musicItem.scss';
import {
    Card,
    CardContent,
    Typography,
    CardMedia
  } from '@mui/material';

const MusicItem = (props) => {

    return (
        <Card className='music_item__container' sx={{ maxWidth: 345 }}>  
        <CardMedia
        component="img"
        sx={{ width: 'auto',  height: 'auto'}}
        image={props.data.artworkUrl100}
        alt="Live from space album cover"
      /> 
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.data.collectionName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.data.artistName}
          </Typography>
        </CardContent>
    </Card>
    );
}

export default MusicItem;