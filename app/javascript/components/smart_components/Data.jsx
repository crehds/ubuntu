import React, { Component } from 'react';
import DataLayout from '../dumb_components/Data-Layout.jsx';
import UserBar from './UserBar.jsx';
import LastCotiza from './LastCotiza.jsx';
import LastOrders from './LastOrders.jsx';
import Emitir from './Emitir.jsx';
import Modificar from './Modificar.jsx';
import ModalContainer from './ModalContainer.jsx';
import Modal from '../dumb_components/Modal.jsx';

class Data extends Component {

  state = {
    page: this.props.state,
    modalVisible: false,
    usuario: this.props.usuario,
    empresa: this.props.empresa,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.props.state) {
      this.setState({
        page: nextProps.state,
      });
    }

    if (nextProps.empresa !== this.props.empresa || nextProps.usuario !== this.props.usuario) {
      this.setState({
        empresa: nextProps.empresa,
        usuario: nextProps.usuario,
      });
    }
  }

  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render () {
    switch (this.state.page) {
      case 'Home':
        return (
          <DataLayout>
            <UserBar/>
            <LastCotiza
              handleOpenModal={this.handleOpenModal}
            />
            <LastOrders
              handleOpenModal={this.handleOpenModal}
            />
            {this.state.modalVisible &&
              <ModalContainer>
                <Modal
                  handleClick={this.handleCloseModal}
                >
                <img src={this.state.media.src} alt={this.state.media.alt}/>
                </Modal>
              </ModalContainer>
            }
          </DataLayout>
        );
      case 'Emitir':
        return (
          <DataLayout>
            <UserBar/>
            <Emitir
              usuario={this.state.usuario}
              empresa={this.state.empresa}
            />
          </DataLayout>
        );
      case 'Modificar':
        return (
          <DataLayout>
            <UserBar/>
            <Modificar/>
          </DataLayout>
        );
      default:
        return (<div>Error</div>);
    }
  }
}

export default Data;
