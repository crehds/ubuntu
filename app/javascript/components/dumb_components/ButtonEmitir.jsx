import React, { Component } from 'react';
import '../style/buttonemitir.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class ButtonEmitir extends Component {
  downloadDocument = () => {
    const input = document.getElementById('previewVist');
    html2canvas(input)
        .then((canvas) => {
          console.log(canvas);
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`${input}.pdf`);
        });
    ;
  };

  render() {
    return (
      <div className="buttonemitir-container">
      <button className="buttonemitir" onClick={this.props.putDocument}>Guardar</button>
      <button className="buttonemitir" onClick={this.downloadDocument}>Descargar</button>
      </div>
    );
  }
}

export default ButtonEmitir;
