import { Component } from 'react';
import { ReaderContainer } from './Reader.styled';
import { ReaderControls } from './Controls';
import { Progress } from './Progress';
import { Publications } from './Publications';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  onChangeIndex = value => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + value,
    }));
  };
  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);

    if (savedState !== null) {
      const publicationIndex = Number(localStorage.getItem(LS_KEY));
      this.setState({ publicationIndex });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.publicationIndex !== this.state.publicationIndex) {
      localStorage.setItem(LS_KEY, this.state.publicationIndex);
    }
  }

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[publicationIndex];

    return (
      <ReaderContainer>
        <h1>Reader</h1>
        <ReaderControls
          currentItem={publicationIndex + 1}
          totalItems={totalItems}
          onChange={this.onChangeIndex}
        />
        <Progress current={publicationIndex + 1} total={totalItems} />
        <Publications title={currentItem.title} text={currentItem.text} />
      </ReaderContainer>
    );
  }
}
