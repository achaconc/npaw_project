import React, { useRef } from 'react';
import './header.scss';
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = (props) => {

  const inputSearchRef = useRef(null);

  const searchItemsHandler = (event) => {
    event.preventDefault();
    const enteredInput = inputSearchRef.current ? inputSearchRef.current.value.trim() : null;
    if (enteredInput.length === 0)
      return;
    props.onChangeList(enteredInput);
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            I-MUSIC
          </Typography>
          <form onSubmit={searchItemsHandler} className='form_component'>
            <input
              className='search_input'
              ref={inputSearchRef}
              placeholder="Buscar…"
            />
            <Button className='button_component' type='submit' component="button">
              <SearchIcon />
            </Button>
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
