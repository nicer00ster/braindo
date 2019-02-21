import React from 'react';
import { connect } from 'react-redux';

import { toggleNav } from '../actions';
import NavItem from './NavItem';
import menu from '../menu.svg';
import darkMenu from '../menu-dark.svg';
import logo from '../logo.svg';
import logoWhite from '../logo-white.svg';

const Nav = ({ toggleNav, navOpen, screenWidth, isTop }) => (
  <div className={screenWidth < 1120 ? "nav mobile" : "nav" }>
    <div className={screenWidth < 1120 ? `nav__links${!isTop ? `__scrolled` : ``}` : "nav__links"}>
      <div className="nav__logo">
        <img src={screenWidth > 1120 ? logoWhite : screenWidth < 1120 & isTop ? logoWhite : logo} alt="BrainDo"/>
      </div>
      <div className={screenWidth < 1120 ? `nav__items${navOpen ? `__open` : ``}` : "nav__items" }>
        <NavItem link="Case Studies" />
        <NavItem link="Services" />
        <NavItem link="About" />
        <NavItem link="Blog" />
        <NavItem link="Careers" />
        <NavItem link="Contact" />
      </div>
    </div>
    {screenWidth < 1120 ? <img className="nav__menu" onClick={() => toggleNav()} src={screenWidth < 1120 && isTop ? menu : darkMenu} alt="Hamburger"/> : null}
    <h2 className="nav__title">Case Studies</h2>
  </div>
);

const mapStateToProps = ({ data: { navOpen, screenWidth, isTop } }) => ({
  navOpen,
  screenWidth,
  isTop,
});

const mapDispatchToProps = {
  toggleNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
