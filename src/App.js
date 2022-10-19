import './App.css';
import Container from './components/Container/Container';
import Searchbar from './components/SearchBar/Searchbar';
import Footer from './components/Footer/Footer';
import Collections from './components/Collections/Collections';

function App() {
  const test = ["TESTING", "TESTING"]
  return (
    <div className="App">
      <div className='app-title'>WEATHER APP CARDS</div>

      <div className="collection-container">
        <Collections />
      </div>
      <Footer />
    </div>
  );
}

export default App;
