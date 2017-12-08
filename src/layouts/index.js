import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';

import theme from '../assets/theme.json';
// import logo from '../assets/img/logo.svg';
import './all.sass';

const Navbar = () => (
  <Nav>
    <Link className="navbar-item" to="/about">
      About
    </Link>
    <Link className="navbar-item" to="/products">
      Products
    </Link>
  </Nav>
);

const Nav = styled.nav`
  position: absolute;
  z-index: 100;
  top: 12px;
  left: 0px;
  right: 0px;
`;

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet title="Taito United" />
      <Navbar />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
