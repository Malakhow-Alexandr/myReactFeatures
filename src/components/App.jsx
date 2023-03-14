import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../colors.json';
import Counter from './Counter';
import publications from '../publications.json';
import { TodoListBoard } from './ToDoList/ToDoListBoard';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { FormBoard } from './Form/FormBoard';
import { VimeoBoard } from './VimeoPlayer/PlayerBoard/PlayerBoard';
import { Reader } from './Reader/Reader';
import { PokemonBoard } from './PokemonFetch/PokemonBoard';
import { AdminBoard } from './AdminCRUD/AdminBoard';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div
        style={{
          padding: '20px',
          maxWidth: '1200px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
        }}
      >
        <Counter />
        <Dropdown />
        <ColorPicker options={colors} />
        <TodoListBoard />
        <FormBoard />
        <VimeoBoard />
        <Reader items={publications} />
        <PokemonBoard />
        <AdminBoard />
      </div>
    );
  }
}

ColorPicker.propTypes = {
  colors: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
  }),
};
