import { PureComponent } from 'react';
import { PlayerWrapper, StyledPlayer } from './Player.styled';

export class Player extends PureComponent {
  state = {
    isVideoLoaded: false,
  };
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        isVideoLoaded: false,
      });
    }
  }
  render() {
    const { url } = this.props;
    const { isVideoLoaded } = this.state;
    const showLoader = url && !isVideoLoaded;
    const playerSize = isVideoLoaded ? '100%' : 0;

    return (
      <>
        {showLoader && <h2>Loading...</h2>}
        {url && (
          <PlayerWrapper>
            <StyledPlayer
              url={url}
              controls
              onReady={() => this.setState({ isVideoLoaded: true })}
              width={playerSize}
              height={playerSize}
            />
          </PlayerWrapper>
        )}
      </>
    );
  }
}
