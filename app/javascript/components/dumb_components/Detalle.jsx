import React from 'react';
import '../style/detalle.css'

function Detalle(props) {
  return (
    <div className="Detalle">
      <form className="detalle-details" onSubmit={props.handleDetail}>
        <div className="detalle-details-inputs">
          <span>
          <p>Nombre producto</p>
          <input type="text" placeholder="Ej. Casaca de cuero" ref={props.setDetRef} ref={props.setDetRef}/>
          </span>
          <span>
          <p>Cantidad</p>
          <input type="text" placeholder="Expresado en unidades" ref={props.setDetRef}/>
          </span>
          <span>
          <p>Precio</p>
          <input type="text" placeholder="Expresado en pesos" ref={props.setDetRef}/>
          </span>
        </div>
        <button className="detalle-button">Agregar Producto</button>
      </form>
      <div id="prueba" className="detalle-vist">
        <div className="detalle-vist-title">
          <h1>Producto</h1>
          <h1>Cantidad</h1>
          <h1>Precio</h1>
        </div>
      </div>
      <button className="detalle-vist-button" onClick={props.showProd}>Agregar</button>
      <button className="detalle-vist-button" onClick={props.resetDetailVist}>
      Resetear</button>
    </div>
  );
}

export default Detalle;
