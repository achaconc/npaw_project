import React, { useRef } from 'react';
import './header.scss';
import {
  AppBar,
  Container,
  Typography,
  Toolbar
} from '@mui/material';

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
          <form onSubmit={searchItemsHandler}>
            <button type='submit'> button </button>
            <input
              ref={inputSearchRef}
              placeholder="Buscar…"
            />
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
