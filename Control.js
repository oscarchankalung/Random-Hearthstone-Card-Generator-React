var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var Control = function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control(props) {
    _classCallCheck(this, Control);

    var _this = _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));

    _this.setCardPage = _this.setCardPage.bind(_this);
    return _this;
  }

  _createClass(Control, [{
    key: "setCardPage",
    value: function setCardPage(call) {
      var newCardPage = void 0;
      if (typeof call === "string") {
        switch (call) {
          case "Prev":
            newCardPage = this.props.cardPage - 1;
            break;
          case "Rand":
            newCardPage = Math.floor(Math.random() * this.props.cardCount) + 1;
            break;
          case "Next":
            newCardPage = this.props.cardPage + 1;
            break;
          default:
            break;
        }
      } else {
        newCardPage = call;
      }
      this.props.requestCard(newCardPage);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var prevVisibility = this.props.cardPage && this.props.cardPage > 1 ? "visible" : "hidden";
      var nextVisibility = this.props.cardPage && this.props.cardPage < this.props.cardCount ? "visible" : "hidden";

      return React.createElement(
        "div",
        { className: "Control" },
        React.createElement(
          "button",
          {
            className: "Prev",
            onClick: function onClick() {
              return _this2.setCardPage("Prev");
            },
            style: { visibility: prevVisibility }
          },
          "Prev"
        ),
        React.createElement(
          "button",
          {
            className: "Rand",
            onClick: function onClick() {
              return _this2.setCardPage("Rand");
            }
          },
          "Rand"
        ),
        React.createElement(
          "button",
          {
            className: "Next",
            onClick: function onClick() {
              return _this2.setCardPage("Next");
            },
            style: { visibility: nextVisibility }
          },
          "Next"
        )
      );
    }
  }]);

  return Control;
}(React.Component);

export default Control;