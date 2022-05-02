import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.css';
import React from 'react';

function AppBar() {
  return (
    <div className={styles.header}>
      <Navigation  />
    </div>
  );
}

export default AppBar;