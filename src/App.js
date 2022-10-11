import './App.css';
import Container from './components/Container/Container';
import Searchbar from './components/SearchBar/Searchbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
