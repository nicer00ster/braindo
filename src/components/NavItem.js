import React from 'react';

const NavItem = props =>
  <a className="nav__item" href="#">
    {props.link.toUpperCase()}
  </a>

export default NavItem;
