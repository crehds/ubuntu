import React from 'react';
import '../style/lastcotiza-layout.css';

function LastCotizaLayout(props) {
  return (
    <section className="LastCotiza">
      <div className="title">
        Cotizaciones
      </div>
      {props.children}
    </section>
  );
}

export default LastCotizaLayout;
