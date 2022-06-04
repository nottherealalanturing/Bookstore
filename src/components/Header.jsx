import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <div className="navigation">
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/" className="links">
        Books
      </Link>
      <Link to="/category" className="links">
        Category
      </Link>
    </nav>
  </div>
);

export default Header;
