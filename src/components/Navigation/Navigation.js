import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/trending/get-trending"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/search/search-movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;