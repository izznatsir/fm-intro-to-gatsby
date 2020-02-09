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
      <nav className="grid grid-flow-col col-gap-6 items-center">
        <Link to="/" className="leading-none">
          Home
        </Link>
        <Link to="/about" className="leading-none">
          About
        </Link>
        <Link to="/contact" className="leading-none">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
