import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Shop from './Components/Shop';
import About from './Components/About';
import Details from './Components/Details';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/shop' exact component={Shop}/>
        <Route path='/about' component={About}/>
        <Route path='/shop/:url' exact component={Details}/>
      </Switch>
      </div>
    </Router>
  );
}

const Home=()=>(
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;

