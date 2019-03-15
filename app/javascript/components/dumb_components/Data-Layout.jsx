import React from 'react';
import '../style/data-layout.css';

function DataLayout(props) {
  return (
    <section className="Data">
      {props.children}
    </section>
  );
}

export default DataLayout;
