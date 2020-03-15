import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
function Nav() {
    const linkStyle={
        color:'white',
        padding:20
    };

  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
  <a className="navbar-brand" href="#">Logo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
 
      
          <Link to='/shop' style={linkStyle} className="nav-item">
            <li>Shop</li>
          </Link>
          <Link to='/about' style={linkStyle} className="nav-item">
            <li>About</li>
          </Link>   
      
    </ul>
   
  </div>
</nav>
    </div>
  );
}

export default Nav;
