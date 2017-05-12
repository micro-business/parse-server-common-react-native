'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.User = undefined;

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _baseObject = require('./base-object');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var User = (function(_BaseObject) {
  _inherits(User, _BaseObject);

  function User(object) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(
      this,
      (User.__proto__ || Object.getPrototypeOf(User))
        .call(this, object, '_User'),
    );

    _this.getInfo = _this.getInfo.bind(_this);
    return _this;
  }

  _createClass(User, [
    {
      key: 'getInfo',
      value: function getInfo() {
        return Map({
          id: this.getId(),
        });
      },
    },
  ]);

  return User;
})(_baseObject.BaseObject);

exports.User = User;
exports.default = User;
