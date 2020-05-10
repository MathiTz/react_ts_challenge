import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Header() {
  return (
    <div className="header__main">
      <ul className="header__main--nav">
        <Link to='/'>HOME</Link>
        <Link to='/create'>CREATE A PIZZA</Link>
      </ul>
    </div>
  )
}

export default Header;