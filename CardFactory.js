'use strict';

import _regeneratorRuntime from 'babel-runtime/regenerator';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import HttpError from './HttpError.js';

var CardFactory = function () {
  function CardFactory() {
    _classCallCheck(this, CardFactory);

    this.client_id = 'f5ef9bd3e2444bfaba636329f2438a82';
    this.client_secret = 'oymYHiN7qgMXOVNvVGUP22LT4PodTW6f';
    this.authorize_url = 'https://us.battle.net/oauth/token';
    this.card_url = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US';
    this.access_token = null;
    this.cardCount = null;
  }

  _createClass(CardFactory, [{
    key: 'setToken',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var params, response, json, _json;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = new URLSearchParams();

                params.append('grant_type', 'client_credentials');
                params.append('client_id', this.client_id);
                params.append('client_secret', this.client_secret);

                _context.next = 6;
                return fetch(this.authorize_url, {
                  method: 'POST',
                  body: params,
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });

              case 6:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 14;
                  break;
                }

                _context.next = 10;
                return response.json();

              case 10:
                json = _context.sent;
                throw new HttpError(response, 'Fail to retrieve access token', json);

              case 14:
                _context.next = 16;
                return response.json();

              case 16:
                _json = _context.sent;

                this.access_token = _json.access_token;

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setToken() {
        return _ref.apply(this, arguments);
      }

      return setToken;
    }()
  }, {
    key: 'setCardCount',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var params, response, json;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = new URLSearchParams();

                params.append('setGroup', 'wild');
                params.append('pageSize', 1);

                _context2.next = 5;
                return fetch(this.card_url + params, {
                  method: 'GET',
                  headers: { Authorization: 'Bearer ' + this.access_token }
                });

              case 5:
                response = _context2.sent;

                if (response.ok) {
                  _context2.next = 10;
                  break;
                }

                throw new HttpError(response, 'Fail to retrieve card count');

              case 10:
                _context2.next = 12;
                return response.json();

              case 12:
                json = _context2.sent;

                this.cardCount = json.cardCount;

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setCardCount() {
        return _ref2.apply(this, arguments);
      }

      return setCardCount;
    }()
  }, {
    key: 'getCard',


    // get card
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(cardPage) {
        var params, response, json;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = new URLSearchParams();

                params.append('setGroup', 'wild');
                params.append('pageSize', 1);
                params.append('page', cardPage);

                _context3.next = 6;
                return fetch(this.card_url + params, {
                  method: 'GET',
                  headers: { Authorization: 'Bearer ' + this.access_token }
                });

              case 6:
                response = _context3.sent;

                if (response.ok) {
                  _context3.next = 11;
                  break;
                }

                throw new HttpError(response, 'Fail to retrieve card');

              case 11:
                _context3.next = 13;
                return response.json();

              case 13:
                json = _context3.sent;
                return _context3.abrupt('return', json.cards[0]);

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getCard(_x) {
        return _ref3.apply(this, arguments);
      }

      return getCard;
    }()
  }]);

  return CardFactory;
}();

CardFactory.init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
  var cardFactory;
  return _regeneratorRuntime.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          cardFactory = new CardFactory();
          _context4.prev = 1;
          _context4.next = 4;
          return cardFactory.setToken();

        case 4:
          _context4.next = 6;
          return cardFactory.setCardCount();

        case 6:
          _context4.next = 13;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4['catch'](1);

          console.log(_context4.t0.name + ': ' + _context4.t0.message);
          console.log('error: ' + _context4.t0.body.error);
          console.log('error_description: ' + _context4.t0.body.error_description);

        case 13:
          return _context4.abrupt('return', cardFactory);

        case 14:
        case 'end':
          return _context4.stop();
      }
    }
  }, _callee4, this, [[1, 8]]);
}));

export default CardFactory;