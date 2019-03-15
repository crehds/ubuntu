import React from 'react';
import '../style/userbar-layout.css';
import logo from 'images/logo1.png';

function DataLayout(props) {
  return (
    <section className="UserBar">
      <img className="logo" src={logo} alt="logo de yunqui"/>
      {props.children}
    </section>
  );
}

export default DataLayout;
