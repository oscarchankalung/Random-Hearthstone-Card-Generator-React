import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import random from './random.png';


class Cardboard extends React.Component {

  render() {
    return (
      <div className="Cardboard">
          <div className="Cardboard-Left">
            <img src={this.props.card.image ? this.props.card.image : random} alt=""/>
          </div>
          <div className="Cardboard-Right">
            <p className="Card-Name">{this.props.card.name}</p>
            <p className="Card-Flavor-Text">{this.props.card.flavorText}</p>
            <p className="Card-Text">{ReactHtmlParser(this.props.card.text)}</p>
            <p className="Card-Artist-Name">{this.props.card.artistName}</p>
          </div>
        </div>
    )
  }

}

export default Cardboard;
