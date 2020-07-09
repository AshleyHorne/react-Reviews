import React from 'react';

import "../styles.css";
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import Header from './Header';



 function App() {
  return (
    <div>
      <Header />
     <p> test</p>
     <Counter />
    <HelloWorld name = 'Ashe'/>
    
    
    </div>
  );
}
export default App;
