import React from "react";
import PropTypes from "prop-types";
import HomeLayout from './dumb_components/HomeLayout.jsx';
import NavBar from './smart_components/NavBar.jsx';
import Data from './smart_components/Data.jsx';

class Home extends React.Component {

  state = {
    data: 'Emitir',
    usuario:'',
    empresa:'',
  };

  handleData = (string) => this.setState({
      data: string,
    })
  ;

  UNSAFE_componentWillMount() {
    fetch('/api/v1/empresas/1/empresas.json')
      .then((response) => response.json()
      )
      .then((data) => this.setState({ empresa: data }));
      fetch('/api/v1/empresas/1/usuarios.json')
        .then((response) => response.json()
        )
        .then((data) => this.setState({ usuario: Object.assign({}, ...data) }));
  }


  componentDidMount() {
  }

  render () {
    var {
      data,
      empresa,
      usuario,
    } = this.state;
    return (
      <HomeLayout>
        <NavBar
          handleData={this.handleData}
        />
        <Data
          state={data}
          empresa={empresa}
          usuario={usuario}
        />
      </HomeLayout>
    );
  }
}

export default Home;
