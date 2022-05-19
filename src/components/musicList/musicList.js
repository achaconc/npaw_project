import React from 'react';
import UseFetch from '../../customHooks/useFetch';
import MusicItem from '../musicItem/musicItem';
import {
    Grid
  } from '@mui/material';


const MusicList = () => {
    const {data} = UseFetch('https://itunes.apple.com/search?term=j');
    console.log(data);
    return (
        <Grid className="music_list_component" container spacing={0}
        alignItems="center"
        justifyContent="center">       
            {data && data.results.map(item => <MusicItem key={item.trackId} data={item}/>)}
      </Grid>
    );
}

export default MusicList;