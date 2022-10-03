import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Container from './components/Container';
import Searchbar from './SearchRedux/Searchbar';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Container />
    </div>
  );
}

export default App;
