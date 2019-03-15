import React from 'react';
import '../style/detalle-layout.css';

function DetalleLayout(props) {
  return (
    <div className="DetalleLayout">
      {props.children}
    </div>
  );
}

export default DetalleLayout;
