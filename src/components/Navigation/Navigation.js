import React from 'react';
import { Link } from './Navigation.styles';

function Navigation() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/movies'>Movies</Link>
    </nav>
  );
}

export default Navigation;
