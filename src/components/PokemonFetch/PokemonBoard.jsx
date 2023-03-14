import { Component } from 'react';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class PokemonBoard extends Component {
  state = {
    pokemonName: '',
  };
  handleSearchFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    const { pokemonName } = this.state;
    return (
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: 20,
          marginBottom: '60px',
        }}
      >
        <PokemonForm onSubmit={this.handleSearchFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </div>
    );
  }
}
