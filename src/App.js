import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbars';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
