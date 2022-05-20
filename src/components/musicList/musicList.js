import React from 'react';
import MusicItem from '../musicItem/musicItem';
import {
    Grid
} from '@mui/material';


const MusicList = (props) => {
    return (
        <Grid className="music_list_component" container spacing={0}
            alignItems="center"
            justifyContent="center">
            {props.data && props.data.results &&
                props.data.results.map(item =>
                    <MusicItem key={Math.random()} data={item} />
                )}
        </Grid>
    );
}

export default MusicList;