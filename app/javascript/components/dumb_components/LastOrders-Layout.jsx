import React from 'react';
import '../style/lastorders-layout.css';

function LastOrdersLayout(props) {
  return (
    <section className="LastOrders">
      <div className="title">
        Ordenes de Compra
      </div>
      {props.children}
    </section>
  );
}

export default LastOrdersLayout;
