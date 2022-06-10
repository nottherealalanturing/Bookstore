import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
  <div className="navbar">
    <nav className="navigation">
      <h1 className="header-text">Bookstore CMS</h1>
      <Link to="/" className="link">
        BOOKS
      </Link>
      <Link to="/category" className="link">
        CATEGORY
      </Link>
    </nav>
    <CgProfile className="profile" />
  </div>
);

export default Header;
