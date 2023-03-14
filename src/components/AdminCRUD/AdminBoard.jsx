import { Component } from 'react';
import { MaterialEditorForm } from './MaterialEditor/MaterialEditorForm';
import { Materials } from 'components/AdminCRUD/Materials/Materials';
import * as API from './services/api';

export class AdminBoard extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: null,
  };

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({
        materials: [...state.materials, material],
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  };

  componentDidMount = async () => {
    try {
      this.setState({ isLoading: true });
      const startMaterials = await API.getMaterial();
      this.setState({ materials: startMaterials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  };

  render() {
    const { materials, error, isLoading } = this.state;
    return (
      <div>
        {error && <p>Sorry somthing wrong! Please reload your webPage.</p>}
        <MaterialEditorForm onSubmit={this.addMaterial} />

        {isLoading ? 'Loading' : <Materials items={materials} />}
      </div>
    );
  }
}
