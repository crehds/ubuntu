import React from 'react';
import '../style/navbar-layout.css';

function NavBarLayout(props) {
  return (
    <div className="NavBar"
      ref={props.navRef}
    >
      {props.children}
    </div>
  );
}

export default NavBarLayout;
