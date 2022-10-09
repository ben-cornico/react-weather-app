import './App.css';
import Container from './components/Container';
import Searchbar from './SearchRedux/Searchbar';
import Footer from './components/Footer';

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
