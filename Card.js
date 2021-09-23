import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import $ from 'jquery';

var Card = function () {
  function Card() {
    _classCallCheck(this, Card);

    this.client_id = "f5ef9bd3e2444bfaba636329f2438a82";
    this.client_secret = "oymYHiN7qgMXOVNvVGUP22LT4PodTW6f";
    this.authorize_url = "https://us.battle.net/oauth/token";
    this.card_url = "https://us.api.blizzard.com/hearthstone/cards?locale=en_US";
    this.access_token = null;
  }

  // post access_token if null


  _createClass(Card, [{
    key: "getToken",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var result;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.access_token === null)) {
                  _context.next = 13;
                  break;
                }

                result = void 0;
                _context.prev = 2;
                _context.next = 5;
                return $.ajax({
                  type: "POST",
                  url: this.authorize_url,
                  data: {
                    grant_type: "client_credentials",
                    client_id: this.client_id,
                    client_secret: this.client_secret
                  }
                });

              case 5:
                result = _context.sent;

                this.access_token = result.access_token;
                console.log("access_token:", this.access_token);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);

                console.log(_context.t0);

              case 13:
                return _context.abrupt("return", this.access_token);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function getToken() {
        return _ref.apply(this, arguments);
      }

      return getToken;
    }()
  }, {
    key: "getCardCount",


    // get cardCount
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var result;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = void 0;
                _context2.prev = 1;
                _context2.next = 4;
                return $.ajax({
                  type: "GET",
                  url: this.card_url + "&setGroup=wild&pageSize=1",
                  headers: {
                    Authorization: "Bearer " + this.access_token
                  }
                });

              case 4:
                result = _context2.sent;

                console.log("cardCount:", result.cardCount);
                return _context2.abrupt("return", result.cardCount);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);

                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));

      function getCardCount() {
        return _ref2.apply(this, arguments);
      }

      return getCardCount;
    }()

    // get card

  }, {
    key: "getCard",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(cardPage) {
        var result;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = void 0;
                _context3.prev = 1;
                _context3.next = 4;
                return $.ajax({
                  type: "GET",
                  url: this.card_url + "&setGroup=wild&pageSize=1&page=" + cardPage,
                  headers: {
                    Authorization: "Bearer " + this.access_token
                  }
                });

              case 4:
                result = _context3.sent;

                console.log('cardPage:', cardPage);
                console.log('card:', result.cards[0].name);
                return _context3.abrupt("return", result.cards[0]);

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](1);

                console.log(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 10]]);
      }));

      function getCard(_x) {
        return _ref3.apply(this, arguments);
      }

      return getCard;
    }()
  }]);

  return Card;
}();

export default Card;