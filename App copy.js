var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import random from './random.png';
import Cardboard from './Cardboard';
import Control from './Control';
import Card from './Card';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      cardCount: null,
      cardInput: null,
      cardPage: null,
      card: {}
    };
    _this.Card = new Card();
    _this.requestBase = _this.requestBase.bind(_this);
    _this.requestCard = _this.requestCard.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.requestBase();
    }
  }, {
    key: 'requestBase',
    value: function requestBase() {
      var _this2 = this;

      this.Card.getToken().then(function (access_token) {
        _this2.Card.getCardCount().then(function (cardCount) {
          _this2.setState({ cardCount: cardCount });
        });
      });
    }

    // get cardPage and card if cardPage is changed

  }, {
    key: 'requestCard',
    value: function requestCard(newCardPage) {
      var _this3 = this;

      if (this.state.cardPage !== newCardPage) {
        this.setState({
          cardPage: newCardPage
        });
        this.Card.getCard(newCardPage).then(function (card) {
          _this3.setState({
            card: card
          });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'Background' },
        React.createElement(Cardboard, {
          card: this.state.card
        }),
        React.createElement(Control, {
          cardCount: this.state.cardCount,
          cardPage: this.state.cardPage,
          requestCard: this.requestCard
        })
      );
    }
  }]);

  return App;
}(React.Component);

export default App;