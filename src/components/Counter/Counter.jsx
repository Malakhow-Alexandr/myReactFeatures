import React from 'react';
import PropTypes from 'prop-types';
import { CounterControls } from './CounterControls';

import { CounterContainer } from './Counter.styled';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDecrement = () => {
    this.setState(prevState => {
      if (this.state.value <= 0) {
        return;
      }
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <CounterContainer>
        <span className="Counter__value">{this.state.value}</span>
        <CounterControls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </CounterContainer>
    );
  }
}

export default Counter;
