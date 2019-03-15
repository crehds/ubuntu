import React, { Component } from 'react';
import '../style/option-containers.css';

class OrdenDeCompra extends Component {

  state = {
    references: [],
  };

  componentDidMount () {
    this.props.handleForm(this.state.references);
  };

  setInputRef = element => {
    return this.state.references.push(element);
  };

  render() {
    return (
      <form className="option-containers" onSubmit={this.props.showInputs}
      >
      <div className="option-prueba">
      <p>R.U.T.</p>
      <input type="text" placeholder={this.props.RUT}
      ref={this.setInputRef}
      />
      </div>
      <div className="option-prueba">
      <p>Proveedor</p>
      <input type="text" placeholder={this.props.proveedor}
      ref={this.setInputRef}
      />
      </div>
      <div className="option-prueba">
      <p>contacto</p>
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
      <p>Fecha de pedido</p>
      <input type="text" placeholder={this.props.fechaPedido}
      ref={this.setInputRef}
      />
      </div>
      <div className="option-prueba">
      <p>Términos de entrega</p>
      <input type="text" placeholder={this.props.terminosEntrega}
      ref={this.setInputRef}
      />
      </div>
      <div className="option-prueba">
      <p>Fecha de pago</p>
      <input type="text" placeholder={this.props.fechaPago}
      ref={this.setInputRef}
      />
      </div>
      <button className="option-button">Añadir datos</button>
      </form>
    );
  }
}

export default OrdenDeCompra;
