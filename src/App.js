import React, { useState } from 'react'
import './App.css';
import Header from './ui/header/header';
import Content from './ui/content/content';
import UseFetch from './customHooks/useFetch';
import {
  Alert,
  AlertTitle,
  Typography,
} from '@mui/material';

const App = () => {

  const [searchValue, setSearchValue] = useState();
  const { data } = UseFetch(`https://itunes.apple.com/search?term=${searchValue}`, 'collectionId');

  return (
    <div>
      <Header onChangeList={setSearchValue} />
      {data && data.resultCount > 0 && searchValue ? <Content data={data} /> :
        <Alert className='alert_component' severity='info' icon={false} spacing={2}>
          <AlertTitle>
            <Typography variant='h5'>
              Haz una búsqueda!
            </Typography>
          </AlertTitle>
          <Typography variant='subtitle1'>
            Puedes hacer tu búsqueda comienza poniendo alguna palabra(s) clave en el cuadro de texto
            y haciendo click sobre la lupa
          </Typography>
        </Alert>
      }
    </div>
  );
}

export default App;
