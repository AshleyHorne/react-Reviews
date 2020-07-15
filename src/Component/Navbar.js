import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Feedback">Feedback</NavLink>
          <NavLink to="/Error">Problem</NavLink>
       </div>
    );
}
 
export default Navigation;