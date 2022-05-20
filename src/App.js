import React, { useState } from 'react'
import './App.css';
import Header from './ui/header/header';
import Content from './ui/content/content';
import UseFetch from './customHooks/useFetch';

const App = () => {

  const [searchValue, setSearchValue] = useState('');
  const { data } = UseFetch(`https://itunes.apple.com/search?term=${searchValue}`);

  return (
    <div>
      <Header onChangeList={setSearchValue} />
      {data &&
        <Content data={data} />
      }
    </div>
  );
}

export default App;
