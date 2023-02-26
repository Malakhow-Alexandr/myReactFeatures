import React, { Component } from 'react';
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          eMail
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <p>Your level</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="Junior"
            checked={this.state.experience === 'Junior'}
            onChange={this.handleChange}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Middle"
            checked={this.state.experience === 'Middle'}
            onChange={this.handleChange}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="Senjor"
            checked={this.state.experience === 'Senjor'}
            onChange={this.handleChange}
          />
          Senjor
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Submit
        </button>
      </form>
    );
  }
}
