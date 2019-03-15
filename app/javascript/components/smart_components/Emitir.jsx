import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import EmitirLayout from '../dumb_components/Emitir-Layout.jsx';
import Prueba from '../dumb_components/Prueba.jsx';
import Detalle from '../dumb_components/Detalle.jsx';
import PDF from './PDF.jsx';
import ButtonEmitir from '../dumb_components/ButtonEmitir.jsx';
class Emitir extends Component {

  state = {
    options: 'Cotización',
    detalle: [],
    contentDestinatario: [],
    contentDocumento: [],
    templateProd: [],
    prods: [],
    tipoDestinatario: '',
    tipoDocumento: '',
    estadoDocumento: '',
    empresa: this.props.empresa,
    usuario: this.props.usuario,
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.empresa !== this.props.empresa || nextProps.usuario !== this.props.usuario) {
      this.setState({
        empresa: nextProps.empresa,
        usuario: nextProps.usuario,
      });
    }
  }

  handleOptions = (event) => (
    this.setState({
      options: event.target.value,
    })
  );

  getContentPrueba = (content) => {
    this.setState({
      contentDestinatario: content.slice(0, 4).map(e => e.value),
      contentDocumento: content.slice(4).map(e => e.value),
    });
  };

  putDocument = () => {
    var {
      contentDestinatario,
      contentDocumento,
      prods,
      options,
    } = this.state;
    var tipoDestinatario = (options == 'Cotización') ? 2 : 1;
    var body = JSON.stringify({ destinatarios: {
      nombre_destinatario: contentDestinatario[1],
      contacto_destinatario: contentDestinatario[2],
      email: contentDestinatario[3],
      R_U_T: contentDestinatario[0],
    }, });

    fetch(`http://localhost:3000/api/v1/tipo_destinatarios/${tipoDestinatario}/destinatarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    }).then((response) => response.json())
    .then((data) => {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      today = dd + '/' + mm + '/' + yyyy;
      var tipoDocumento = (options == 'Cotización') ? 1 : 2;
      var body2 = JSON.stringify({ documentos: {
        fecha_envio: today,
        observaciones: 'por ahora ninguna',
      }, });
      return fetch(`http://localhost:3000/api/v1/tipo_documentos/${tipoDocumento}/estado_documentos/4/usuarios/${this.props.usuario.id}/destinatarios/${data.id}/documentos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body2,
      }).then((response) => {
        return response.json();
      })
      .then((data) => {
        var {
          prods,
        } = this.state;
        var tipoDocumento = (options == 'Cotización') ? 1 : 2;
        var body = JSON.stringify({ detalle_documentos: {
          prods: prods,
        }, });
        return fetch(`http://localhost:3000/api/v1/tipo_documentos/${tipoDocumento}/documentos/   ${data.id}/detalle_documentos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: body,
        }).then((response) => response.json())
          .then((data) => {
            var tipoDocumento = (options == 'Cotización') ? 'cotizacions' : 'orden_de_compras';
            var body = (options == 'Cotización') ? JSON.stringify({ cotizacions: {
              condicion_pago: contentDocumento[0],
              validez_oferta: contentDocumento[1],
              tiempo_entrega: contentDocumento[2],
              lugar_entrega: contentDocumento[3],
            }, })
            : JSON.stringify({ orden_de_compra: {
              fecha_pedido: contentDocumento[0],
              fecha_pago: contentDocumento[2],
              terminos_de_entrega: contentDocumento[1],
            }, });
            return fetch(`http://localhost:3000/api/v1/documentos/${data.id}/${tipoDocumento}`,  {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: body,
            });
          });
      });
    });
  };

  downloadDocument = () => {
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Document of a4WidthMm wide and inputHeightMm high
        if (inputHeightMm > a4HeightMm) {
          // elongated a4 (system print dialog will handle page breaks)
          const pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
        } else {
          // standard a4
          const pdf = new jsPDF();
        }

        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save(`${id}.pdf`);
      });
    ;
  };

  createDetail = (data) => (
      data.forEach(e => {
      var d = document.getElementById('prueba');
      var div = document.createElement('div');
      d.appendChild(div).classList.add('detalle-vist-detail');
      div.innerHTML = e;
      this.setProdRef(e);
    })
  );

  resetDetailVist = () => {
    var d = document.getElementById('prueba');
    while (d.children.length != 1) {
      d.removeChild(d.lastChild);
    }
  };

  handleDetail = (event) => {
    event.preventDefault();
    let array = this.state.detalle.map(e => e.value);
    event.target.reset();
    return this.createDetail(array);
  };

  setDetRef = element => (
    this.state.detalle.push(element)
  );

  setProdRef = (element) => (
    this.state.templateProd.push(element)
  );

  showProd = () => {
    this.setState({
      prods: this.state.templateProd,
      templateProd: [],
    });
    this.resetDetailVist();
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
      <EmitirLayout>
        <Prueba
          options={this.state.options}
          handleOptions={this.handleOptions}
          getContentPrueba={this.getContentPrueba}
        />
        <PDF
          contentDocumento={contentDocumento}
          contentDestinatario={contentDestinatario}
          prods={prods}
          usuario={usuario}
          empresa={empresa}
        />
        <Detalle
          setDetRef={this.setDetRef}
          handleDetail={this.handleDetail}
          showProd={this.showProd}
          resetDetailVist={this.resetDetailVist}
        />
        <ButtonEmitir
          putDocument={this.putDocument}
        />
      </EmitirLayout>
    );
  }
}

export default Emitir;
