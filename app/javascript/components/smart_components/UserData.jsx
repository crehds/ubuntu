import React, { Component } from 'react';
import '../style/userdata.css';
import Icon from '../dumb_components/Icon.jsx';

class UserData extends Component {

  state = {
    isOpen: false,
  };

  setArrowRef = element => (
    this.i = element
  );

  handleArrow = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="UserData">
        <Icon
          icon="icon-user image"
          className="userimage"
        />
        <div>Alonso</div>
        <div>Administrador</div>
        <Icon
          icon="icon-keyboard_arrow_down arrow"
          className="arrow"
          setArrowRef={this.setArrowRef}
          handleArrow={this.handleArrow}
        />
        {this.state.isOpen &&
          <div className="login">
            <p>Cambiar de usuario</p>
            <p>Desloguearse</p>
          </div>
        }
      </div>
    );
  }
}

export default UserData;
