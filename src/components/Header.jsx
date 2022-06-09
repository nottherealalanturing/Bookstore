import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="navigation">
      <h1 className="header-text">Bookstore CMS</h1>
      <Link to="/" className="link">
        BOOKS
      </Link>
      <Link to="/category" className="link">
        CATEGORY
      </Link>
    </nav>
  </>
);

export default Header;
