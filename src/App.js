
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MemeGen from './MemeGen';
import {BrowserRouter, Route} from 'react-router-dom'
import Finalmeme from './Finalmeme'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <center>
     <Header />
     <br />
     <Route exact path='/'>
       <div>
       <MemeGen />
       </div>
     </Route>
     <Route exact path='/:id/:box'>
       <Finalmeme />
     </Route>
     <br />
     <Footer />
     </center>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
