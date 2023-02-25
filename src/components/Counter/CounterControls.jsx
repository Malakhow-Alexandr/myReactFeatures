import React from 'react';

import { CounterButton } from './CounterControls.styled';

export const CounterControls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <CounterButton type="button" onClick={onIncrement}>
        increase
      </CounterButton>
      <CounterButton type="button" onClick={onDecrement}>
        decrease
      </CounterButton>
    </div>
  );
};
