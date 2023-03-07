import { Component } from 'react';
import { PokemonFallbackView } from './PokemonErrorView';
import { PokemonDataView } from './PokemonDataView';
import { PokemonPendingView } from './PokemonPendingView';
import { pokemonFetchServise } from './pokemonFetchService';

export class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        pokemonFetchServise(this.props.pokemonName)
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => {
            this.setState({ error, status: 'rejected' });
          });
      }, 2000);
    }
  }
  render() {
    const { pokemon, error, status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') {
      return <div>Please enter pokemon name</div>;
    }
    if (status === 'pending') {
      return <PokemonPendingView pokemonName={pokemonName} />;
    }
    if (status === 'rejected') {
      return <PokemonFallbackView message={error.message} />;
    }
    if (status === 'resolved') {
      return <PokemonDataView pokemon={pokemon} />;
    }
  }
}
