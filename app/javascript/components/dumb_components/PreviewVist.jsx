import React from 'react';
import '../style/previewvist.css';

function PreviewVist(props) {
  return (
    <div className="PreviewVist" id="previewVist">
      {props.children}
    </div>
  );
}

export default PreviewVist;
