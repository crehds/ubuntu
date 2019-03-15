import React, { Component } from 'react';
import NavBarLayout from '../dumb_components/NavBar-Layout.jsx';
import Button from '../dumb_components/Button.jsx';

class NavBar extends Component {

  setNavRef = element => (
    this.div = element
  );

  handleAddClass = () => {
    if (this.div.classList.contains('is-active')) {
      this.div.classList.remove('is-active');
    } else {
      this.div.classList.add('is-active');
    }
  };

  handleContent= (event) => {
    this.props.handleData(event.target.id.slice(2));
  };

  render () {
    return (
      <NavBarLayout
        navRef={this.setNavRef}
      >
      <Button
        option="button"
        class="icon-menu burguer-menu"
        handleAddClass={this.handleAddClass}
      />
      <Button
        name="Home"
        option="button-home"
        class="icon-home"
        handleContent={this.handleContent}
      />
      <Button
        name="Emitir"
        option="button-home"
        class="icon-document-add"
        handleContent={this.handleContent}
      />
      <Button
        name="Modificar"
        option="button-home"
        class="icon-inbox-document"
        handleContent={this.handleContent}
      />
      </NavBarLayout>
    );
  }
}

export default NavBar;
