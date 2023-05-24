
import './App.css';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
      <Header/>
          <Routes>
               <Route path='/checkout'  element={ <div className='app__page'>
              
              <Checkout/>
              </div>}/>
        
              <Route path='/' element={ <div className='app__page'>
              
              <Home/>
              </div>
              } />
              


             
          </Routes>
      </div>
    </Router>
  );
}

export default App;
