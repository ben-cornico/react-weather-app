import { useState } from 'react';
import './App.css';
import Info from './components/Info';
import Searchbar from './components/Searchbar';

function App() {
   const [data, setData] = useState({})
  const handleSubmit = ({coordinates, city, country, state}) => {
    setData({coordinates, city, country})
  }
  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit}/>
      {
        data && <Info data={data} />
      }
    </div>
  );
}

export default App;
