import React from 'react';
import colors from './colors';

// Variable de tipo constante que va retornar un Componente NavBar
const NavBar = (props) => {
  // retornar componente Navbar
  return (
    <header
      style={{
        backgroundColor: colors.secondary,
        padding: '15px'
      }}>
        <a href="/">{props.title}</a>
        <span
          role="img"
          aria-label="logo"
          style={{
            fontSize: '60px',
            display: 'inline-block',
          }}
          >
          🐶
        </span>
    </header>
  )
}

export default NavBar;