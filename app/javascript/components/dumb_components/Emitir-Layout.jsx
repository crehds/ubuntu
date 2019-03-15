import React from 'react';
import '../style/emitir-layout.css';

function EmitirLayout(props) {
  return (
    <section className="Emitir">
      {props.children}
    </section>
  );
}

export default EmitirLayout;
