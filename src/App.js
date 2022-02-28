import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Navbar from './Components/Navbars';
import Home from './Components/Home';
import Players from './Components/Players';
import Footer from './Components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Home/>
//         <Players/>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/home">
                <Home />
              </Route>
                
              {/* This route is for about component 
              with exact path "/about", in component 
              props we passes the imported component*/}
              <Route path="/players">
                <Players />
              </Route>
            </Switch>
          </div>
          <br></br>
          <Footer />
        </div>
        
      </Router>
    </>
  );
}

export default App;
