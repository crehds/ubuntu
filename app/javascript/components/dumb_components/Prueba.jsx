import React, { PureComponent } from 'react';
import '../style/prueba.css';
import CotizacionOptions from './CotizacionOptions.jsx';
import OrdenCompraOptions from './OrdenCompraOptions.jsx';

class Prueba extends PureComponent {
  state = {
    options: this.props.options,
    content: '',
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.options !== this.props.options) {
      this.setState({
        options: nextProps.options,
      });
    }
  }

  handleForm = (data) => {
    return this.setState({
      content: data,
    });
  };

  showInputs = (event) => {
    event.preventDefault();
    this.props.getContentPrueba(this.state.content);
    event.target.reset();
  };

  render () {
    return (
      <div className="Prueba">
        <div className="option-prueba">
          <p>Emitir</p>
          <select name="select" className="select-option" onChange={this.props.handleOptions.bind(this)}>
          <option value="Cotización">Cotización</option>
          <option value="Orden de Compra">Orden de Compra</option>
          </select>
        </div>
        {
          (this.state.options) === 'Cotización' ?
          <CotizacionOptions
            RUT="del cliente"
            cliente="empresa/persona"
            contacto="numero telefónico"
            email="ejemplo@ejemplo.com"
            condicionPago="Mínimo 5 días"
            validezOferta="Mínimo 7 días"
            tiempoEntrega="Máximo 30 días"
            lugarEntrega="Lugar de entrega"
            handleForm={this.handleForm}
            showInputs={this.showInputs}
          />
          :
          <OrdenCompraOptions
            RUT="del proveedor"
            proveedor="nombre"
            contacto="número telefónico"
            email="ejemplo@ejemplo.com"
            fechaPedido="El día puede variar al actual"
            fechaPago="Ingrese el día acordado"
            terminosEntrega="Establezca los términos"
            handleForm={this.handleForm}
            showInputs={this.showInputs}
          />
        }
      </div>
    );
  }
}

export default Prueba;
