import React from 'react';
import '../style/button.css';

function Button(props) {
  if (!props.name) {
    return (
      <a
        className={props.option}
        onClick={props.handleAddClass}
      >
        <i
          className={props.class}
        >
        </i>
      </a>
    );
  } else {
    return (
      <a
        id={`a-${props.name}`}
        className={props.option}
        onClick={props.handleContent}
      >
        <i
          id= {`i-${props.name}`}
          className={props.class}
          title={props.name}
        >
        </i>
        <p
          id={`p-${props.name}`}
        >{props.name}</p>
      </a>
    );
  }
}

export default Button;
