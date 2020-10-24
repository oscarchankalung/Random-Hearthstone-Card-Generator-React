import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import random from './random.png';
import Cardboard from './Cardboard';
import Control from './Control';
import Card from './Card'; 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardCount: null,
      cardInput: null,
      cardPage: null,
      card: {}
    }
    this.Card = new Card();
    this.requestBase = this.requestBase.bind(this);
    this.requestCard = this.requestCard.bind(this);
  }

  // lifecycle: get base data after mounted 
  componentDidMount() {
    this.requestBase();
  }

  // get access_token and cardCount
  requestBase() {
    this.Card.getToken().then((access_token) => {
      this.Card.getCardCount().then((cardCount) => {
        this.setState({cardCount: cardCount});
      })
    })
  }

  // get cardPage and card if cardPage is changed
  requestCard(newCardPage) {
    if (this.state.cardPage !== newCardPage) {
      this.setState({
        cardPage: newCardPage
      })
      this.Card.getCard(newCardPage).then((card) => {
        this.setState({
          card: card
        });
      })
    }
  }

  render() {
    return (
      <div className="Background">
          <Cardboard
            card={this.state.card}
          />
          <Control 
            cardCount={this.state.cardCount}
            cardPage={this.state.cardPage}
            requestCard={this.requestCard}
          />
      </div>
    )
  }

}

export default App;