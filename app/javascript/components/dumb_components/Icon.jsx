import React from 'react';

function Icon(props) {
  if (!props.setArrowRef) {
    return (
      <i
      className={props.icon}
      >
      </i>
    );
  } else {
    return (
      <i
        className={props.icon}
        ref={props.setArrowRef}
        onClick={props.handleArrow}
      >
      </i>
    );
  }
}

export default Icon;
