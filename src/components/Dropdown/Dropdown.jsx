import React, { Component } from 'react';
import {
  DropdownContainer,
  DropdownMenu,
  DropdownButton,
} from './Dropdown.styled';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };
  render() {
    return (
      <DropdownContainer>
        <DropdownButton type="button" onClick={this.toggle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </DropdownButton>

        {this.state.visible && <DropdownMenu>Dropdown Menu</DropdownMenu>}
      </DropdownContainer>
    );
  }
}
