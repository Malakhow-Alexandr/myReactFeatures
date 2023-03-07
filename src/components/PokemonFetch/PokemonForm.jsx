import { Component } from 'react';
import { SiPokemon } from 'react-icons/si';
import { toast } from 'react-toastify';

export class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({
      pokemonName: event.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('🦇 please enter pokemon name!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <form
        style={{ display: 'flex', gap: 5, marginBottom: '20px' }}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button
          type="submit"
          style={{
            width: 100,
            height: 30,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SiPokemon style={{ marginRight: 8, width: 45, height: 50 }} />
          Find
        </button>
      </form>
    );
  }
}
