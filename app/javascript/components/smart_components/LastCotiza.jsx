import React, { Component } from 'react';
import LastCotizaLayout from '../dumb_components/LastCotiza-Layout.jsx';
import Document from '../dumb_components/Document.jsx';
import cotizacion from '../assets/images/cotizacion.jpg';

class LastCotiza extends Component {
  render() {
    return (
      <LastCotizaLayout>
      <Document
        src={cotizacion}
        alt="cotizacion"
        openModal={this.props.handleOpenModal}
      />
      <Document
        src={cotizacion}
        alt="cotizacion"
        openModal={this.props.handleOpenModal}
      />
      <Document
        src={cotizacion}
        alt="cotizacion"
        openModal={this.props.handleOpenModal}
      />
      </LastCotizaLayout>
    );
  }
}

export default LastCotiza;
