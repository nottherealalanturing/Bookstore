import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/header.css';

const Header = () => (
  <div className={styles.navbar}>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/" className={styles.links}>
        Books
      </Link>
      <Link to="/category" className={styles.links}>
        Category
      </Link>
    </nav>
  </div>
);

export default Header;
