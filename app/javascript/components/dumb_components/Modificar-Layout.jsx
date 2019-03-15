import React from 'react';
import '../style/modificar-layout.css';

function ModificarLayout(props) {
  return (
    <form className="Modificar" onSubmit={props.handleForm}>
      {props.children}
    </form>
  );
}

export default ModificarLayout;
