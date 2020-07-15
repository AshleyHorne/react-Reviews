import React, { Component } from 'react';

import "../styles.css";
/* import HelloWorld from './HelloWorld';
import Counter from './Counter'; */
import Header from './Header';
import Navbar from './Navbar';
import About from './Pages/About';
import Hero from './Hero1';
import Purpose from './Purpose';
import Footer from './Footer';
import Hero2 from './Hero2';
import Feedback from './Pages/Feedback';
import Error from './Pages/Error';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (      
      <div>
          <img class="logo" alt="pokemon shinx" src={require('./Images/pokemon-x-and-y-shinx-luxio-pokemon-shinx.jpg')} />
      <Header/>
       <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
             <Route path="/About" component={About}/>
             <Route path="/Feedback" component={Feedback}/>
             <Route path="/Error" component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
      <Hero/>
      <Purpose/>
      <Hero2/>
      <Footer/>
      </div>
    );
  }
}
 
export default App;

 