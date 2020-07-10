import React from 'react';

import "../styles.css";
/* import HelloWorld from './HelloWorld';
import Counter from './Counter'; */
import Header from './Header';
import Nav from './Navbar';

import Hero from './Hero1';
import Purpose from './Purpose';
import Footer from './Footer';
import Hero2 from './Hero2';



 function App() {
  return (
    <div>
      <img class="logo" alt="pokemon shinx" src={require('./Images/pokemon-x-and-y-shinx-luxio-pokemon-shinx.jpg')} />
      <Header/>
      <Nav />
      <Hero/>
      <Purpose/>
      <Hero2/>
      <Footer/>
     {/* <p> test</p>
     <Counter />
    <HelloWorld name = 'Ashe'/> */}
    
    
    </div>
  );
}
export default App;
