import React from 'react';
import PropTypes from 'prop-types';
import colors from '../colors.json';
import Counter from './Counter';
import { TodoListBoard } from './ToDoList/ToDoListBoard';
import { Dropdown } from './Dropdown/Dropdown';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { FormBoard } from './Form/FormBoard';

export const App = () => {
  return (
    <div
      style={{
        padding: '20px 0px',
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
    </div>
  );
};

ColorPicker.propTypes = {
  colors: PropTypes.shape({
    label: PropTypes.string,
    color: PropTypes.string,
  }),
};
