import React, { Component } from 'react';
import {
  IputStyled,
  StyledLabel,
  FormStyled,
  RadioContainer,
  RadioInput,
  RadioLabel,
  StyledFild,
  StyledFormButton,
} from './Form.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    name: '',
    email: '',
    experience: 'Junior',
    licence: false,
  };

  radioId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = event => {
    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({
      name: '',
      email: '',
      experience: 'Junior',
      licence: false,
    });
  };

  render() {
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <StyledFild htmlFor="inputName">
          <IputStyled
            id="inputName"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <StyledLabel>Name</StyledLabel>
        </StyledFild>
        <StyledFild>
          <IputStyled
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <StyledLabel>eMail</StyledLabel>
        </StyledFild>
        <p>Your level</p>
        <RadioContainer>
          <RadioInput
            id="juniorInput"
            type="radio"
            name="experience"
            value="Junior"
            checked={this.state.experience === 'Junior'}
            onChange={this.handleChange}
          />
          <RadioLabel htmlFor="juniorInput"> Junior</RadioLabel>
          <RadioInput
            id="middleInput"
            type="radio"
            name="experience"
            value="Middle"
            checked={this.state.experience === 'Middle'}
            onChange={this.handleChange}
          />
          <RadioLabel htmlFor="middleInput">Middle</RadioLabel>
          <RadioInput
            id="senjorInput"
            type="radio"
            name="experience"
            value="Senjor"
            checked={this.state.experience === 'Senjor'}
            onChange={this.handleChange}
          />
          <RadioLabel htmlFor="senjorInput">Senjor</RadioLabel>
        </RadioContainer>

        <br />
        <div>
          <input
            id="slideCheckbox"
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          <label htmlFor="slideCheckbox"></label>
        </div>

        <StyledFormButton type="submit" disabled={!this.state.licence}>
          Submit
        </StyledFormButton>
      </FormStyled>
    );
  }
}
