import React from 'react';
import PropTypes from 'prop-types';

import useSiteMetadata from '../hooks/use-sitemetadata';

import Helmet from 'react-helmet';
import Header from './header';

import './layout.css';

const Layout = ({ children }) => {
  let { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div>
        <Header />
        <main className="mt-10">{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
