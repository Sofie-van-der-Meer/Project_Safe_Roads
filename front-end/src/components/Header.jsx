// presentational component for the header section
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <nav className={styles.nav}>
        <ul>
        <li>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </li>
        </ul>
    </nav>
  );
}

export default Header;

