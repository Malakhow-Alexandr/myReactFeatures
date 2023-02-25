import React, { Component } from 'react';

import {
  ColorPickerContainer,
  ClorPickerTitle,
  ColorsContainer,
  Colors,
  ColorsNew,
  Description,
} from './ColorPicker.styled';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <ColorPickerContainer>
        <ClorPickerTitle>Color Picker</ClorPickerTitle>
        <Description>Active Color: {label}</Description>
        <ColorsContainer>
          {options.map(({ label, color }, index) =>
            index === activeOptionIdx ? (
              <Colors
                key={label}
                style={{
                  backgroundColor: color,
                  outline:
                    index === activeOptionIdx ? '2px solid black' : 'none',
                  transform: index === activeOptionIdx && 'scale(1.1)',
                }}
              />
            ) : (
              <ColorsNew
                key={label}
                style={{ backgroundColor: color }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              />
            )
          )}
        </ColorsContainer>
      </ColorPickerContainer>
    );
  }
}
