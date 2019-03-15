import React, { Component } from 'react';
import Icon from '../dumb_components/Icon.jsx';
import '../style/notification.css';

class Notification extends Component {
  render() {
    return (
      <div className="Notification">
      <Icon icon="icon-email"/>
      <Icon icon="icon-notifications"/>
      <Icon icon="icon-layers"/>
        {/*icons.map((icon) => (
          <Icon
            key={icon.id}
            icon={icon.icon}
          />
        ))*/}
      </div>
    );
  }
}

export default Notification;
