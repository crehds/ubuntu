import React, { PureComponent } from  'react';
import '../style/documento.css';

class Document extends PureComponent {

  handleClick = () => {
    this.props.openModal(this.props)
  };

  render () {
    var { src, alt } = this.props;
    return (
      <div className="documento">
        <img src={src} alt={alt}/>
        <span className="document-overlay" onClick={this.handleClick}>
          <p>Visualizar</p>
        </span>
      </div>
    );
  }
}

export default Document;
