import React, { Component } from 'react';
import { Form } from './Form';

export class FormBoard extends Component {
  state = {
    name: '',
    email: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
