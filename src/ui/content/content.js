import React from 'react';
import './content.scss';
import MusicList from '../../components/musicList/musicList';
import {
    Box
  } from '@mui/material';

const Content = () => {
    return (
    <Box className='content_container' alignItems="center"
    justifyContent="center">
        <MusicList/>
    </Box>
    )
}

export default Content;