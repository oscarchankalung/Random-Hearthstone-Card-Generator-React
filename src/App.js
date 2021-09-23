'use strict';

import Cardboard from './Cardboard.js';
// import Control from './Control.js';
// import Card from './Card.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cardCount: null,
      cardPage: null,
      card: null
    };
  }

  render () {
    return (
      <div className="Background">
        <Cardboard
          card={this.state.card}
        />
      </div>
    );
  };
}

export default App;
