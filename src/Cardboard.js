// import ReactHtmlParser from 'react-html-parser';
import random from './img/random_cardback.png';

class Cardboard extends React.Component {
  render () {
    const cardImage = this.props.card.image ? this.props.card.image : random;
    return (
      <div className="cardboard">
        <div className="card-info left">
          <img className="card-image" src={cardImage}/>
        </div>
        <div className="card-info right">
          <p className="card-name">{this.props.card.name}</p>
          <p className="card-flavor-text">{this.props.card.flavorText}</p>
          <p className="card-text">{this.props.card.text}</p>
          <p className="card-artist-name">Artist: {this.props.card.artistName}</p>
        </div>
      </div>
    );
  };
}

export default Cardboard;
