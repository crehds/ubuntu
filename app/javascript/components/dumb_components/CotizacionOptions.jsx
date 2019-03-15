import React, { Component } from 'react';
import '../style/option-containers.css';

class Cotización extends Component {

  state = {
    references: [],
  };

  componentDidMount () {
    this.props.handleForm(this.state.references);
  };

  setInputRef = element => {
    return this.state.references.push(element);
  };

  render () {
    return (
    <form className="option-containers" onSubmit={this.props.showInputs}>
    <div className="option-prueba">
    <p>R.U.T.</p>
    <input type="text" placeholder={this.props.RUT} ref={this.setInputRef}/>
    </div>
    <div className="option-prueba">
    <p>Cliente</p>
    <input type="text" placeholder={this.props.cliente}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Contacto</p>
    <input type="text" placeholder={this.props.contacto}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Correo</p>
    <input type="text" placeholder={this.props.email}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Condición de pago</p>
    <input type="text" placeholder={this.props.condicionPago}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Validez de oferta</p>
    <input type="text" placeholder={this.props.validezOferta}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Tiempo de entrega</p>
    <input type="text" placeholder={this.props.tiempoEntrega}
    ref={this.setInputRef}
    />
    </div>
    <div className="option-prueba">
    <p>Lugar de entrega</p>
    <input type="text" placeholder={this.props.lugarEntrega}
    ref={this.setInputRef}
    />
    </div>
    <button className="option-button">Añadir datos</button>
    </form>
  );}
}

export default Cotización;
