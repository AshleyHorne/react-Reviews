import React from 'react';
import About from './About';
import {
    BrowserRouter as Router,
    Route, Switch, Link
  } from 'react-router-dom'
  

function Navbar(){
    return(
    
    <div>
       {/*  <ul>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contact</li></a>
        <a href="#"><li>Feedback</li></a>
        <a href="#"><li>Pokemon Trainer Generator</li></a>
        <a href="#"><li>Pokemon Team Generator</li></a>
        </ul> */}

<Router>
    <Switch>
        <Link to ="About.js">About</Link>
    </Switch>
    <Switch>
        <Link to ="Counter">Counter</Link>
    </Switch>
    <Switch>
        <Link to ="/">Home</Link>
    </Switch>
    
    <Route path="/About.js">
        <h1>About</h1>
    </Route>

    <Route path="/Counter">
        <h1>Counter</h1>
    </Route>
    <Route path="/" exact>
        <h1>Home</h1>
    </Route>
  </Router>
    </div>
    )
}
export default Navbar;