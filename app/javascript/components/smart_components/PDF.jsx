import React, { PureComponent } from 'react';
import PreviewVist from '../dumb_components/PreviewVist.jsx';
import logo from 'images/logo1.png';

class PDF extends PureComponent {

  state = {
    ...this.props,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        ...nextProps,
      });
    }
  }

  empresaTitle= (empresa) => {
    var length = Object.values(empresa).length;
    return Object.values(empresa).slice(2, length - 2).map((e, i) => (
      <div key={i}>
      { i >= 4 && ' ' + '/' + ' '}
      {e}
      </div>
    ));
  };

  pdfDestinatario = (destinatario) => {
    var template = ['R_U_T', 'Cliente', 'Contacto', 'Correo'];
    console.log(destinatario);
    return destinatario.length != 0 ? Object.values(destinatario).map((e, i) => (
      <div className="pdf-destinatario-div" key={i}>
        <p>{template[i] + ' ' + ':'}</p>
        <p>{e}</p>
      </div>
    )) : template.map((e, i) => (
      <div className="pdf-destinatario-div" key={i}>
        <p>{e + ' ' + ':'}</p>
      </div>));
  };

  render() {
    var {
      contentDestinatario,
      contentDocumento,
      prods,
      empresa,
      usuario,
    } = this.state;
    return (
      <PreviewVist>
        <div className="pdf-empresa">
          <img src={logo} alt="logo de la empresa"/>
          <div className="pdf-empresa-title">
            {
              this.empresaTitle(empresa)
            }
          </div>
        </div>
        <div className="pdf-destinatario">
          {this.pdfDestinatario(contentDestinatario)}
        </div>
        <div className="pdf-prods">
          <div className="pdf-prods-details">Item</div>
          <div className="pdf-prods-details">Producto</div>
          <div className="pdf-prods-details">Cantidad</div>
          <div className="pdf-prods-details">Precio Unitario</div>
          <div className="pdf-prods-details">Precio Total</div>
        </div>
        <div className="pdf-details">
          <div>Condiciones Generales</div>
          <div>IVA y Total</div>
        </div>
      </PreviewVist>
    );
  }
}

export default PDF;
