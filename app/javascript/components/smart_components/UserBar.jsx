import React, { Component } from 'react';
import UserBarLayout from '../dumb_components/UserBar-Layout.jsx';
import Search from '../dumb_components/Search.jsx';
import Notification from './Notification.jsx';
import UserData from './UserData.jsx';

class UserBar extends Component {
  render() {
    return (
      <UserBarLayout>
        <Search/>
        <Notification/>
        <UserData/>
      </UserBarLayout>
    );
  }
}

export default UserBar;
