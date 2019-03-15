import React, { Component } from 'react';
import ModificarLayout from '../dumb_components/Modificar-Layout.jsx';
import ModificarOptions from '../dumb_components/ModificarOptions.jsx';
import SearchCotiOrder from './SearchCotiOrder.jsx';
import RelativeOptions from '../dumb_components/RelativeOptions.jsx';
import DetalleMod from './DetalleMod.jsx';
import ButtonsContainer from './ButtonContainer.jsx';
import ArrowContainer from './ArrowContainer.jsx';
import DetalleLayout from '../dumb_components/Detalle-Layout.jsx';

class Modificar extends Component {

  state = {
    options: 'Cotización',
    references: [],
    referencesRelative: [],
  };

  handleForm = (event) => {
    event.preventDefault();
    return console.log(event);
  };

  handleReferences = (data) => (
    this.setState({
      referencesRelative: data,
    })
  );

  handleOptions = (event) => (
    this.setState({
      options: event.target.value,
    })
  );

  setInputRef = element => this.state.references.push(element);

  render() {
    var cotizaOptions = {
      'Condicion de pago': 'Mínimo 5 días',
      'Validez de oferta': 'Mínimo 7 días',
      'Tiempo de entrega': 'Máximo 30 días',
      'Lugar de entrega': 'Lugar de entrega',
    };

    var orderOptions = {
      'Fecha de pedido': 'El día puede variar al actual',
      'Fecha de pago': 'Ingrese el día acordado',
      'Términos de entrega': 'Establezca los términos',
    };
    return (
      <ModificarLayout handleForm={this.handleForm}>
        <SearchCotiOrder
          handleOptions={this.handleOptions}
          placeholder={this.state.options}
        />
        <h1 className="actual">{`Actual ${this.state.options}`}</h1>
        <h1 className="nuevo">{`Nueva ${this.state.options}`}</h1>
        <ModificarOptions/>
        {this.state.options == 'Cotización' ?
          <RelativeOptions
            options={cotizaOptions}
            handleReferences={this.handleReferences}
          />
          :
          <RelativeOptions
            options={orderOptions}
            handleReferences={this.handleReferences}
          />
        }
        <ModificarOptions/>
        {this.state.options == 'Cotización' ?
          <RelativeOptions
          options={cotizaOptions}
          handleReferences={this.handleReferences}
          />
          :
          <RelativeOptions
            options={orderOptions}
            handleReferences={this.handleReferences}
          />
        }
        <DetalleLayout>
          <DetalleMod/>
          <ArrowContainer/>
          <DetalleMod/>
          <ButtonsContainer/>
        </DetalleLayout>
      </ModificarLayout>
    );
  }
}

export default Modificar;
