import React, { Component } from 'react';
import LastOrdersLayout from '../dumb_components/LastOrders-Layout.jsx';
import Document from '../dumb_components/Document.jsx';
import ordenDeCompra from '../assets/images/ordenDeCompra.jpg';

class LastOrders extends Component {
  render() {
    return (
      <LastOrdersLayout>
        <Document
          src={ordenDeCompra}
          alt="orden de compra"
          openModal={this.props.handleOpenModal}
        />
        <Document
          src={ordenDeCompra}
          alt="orden de compra"
          openModal={this.props.handleOpenModal}
        />
        <Document
          src={ordenDeCompra}
          alt="orden de compra"
          openModal={this.props.handleOpenModal}
        />
      </LastOrdersLayout>
    );
  }
}

export default LastOrders;
