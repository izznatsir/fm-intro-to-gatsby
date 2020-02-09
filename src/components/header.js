import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="flex px-56 py-6">
      {/* site name */}
      <Link to="/" className="mr-6 uppercase font-bold">
        FEM Workshop
      </Link>
      {/* navigation */}
      <nav className="grid items-center">
        <Link to="/about" className="leading-none">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
