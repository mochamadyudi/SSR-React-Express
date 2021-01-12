/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _Login = __webpack_require__(15);

var _Login2 = _interopRequireDefault(_Login);

var _api = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: '/',
  exact: true,
  isAuth: true,
  component: _Home2.default,
  fetchInitialData: function fetchInitialData() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _api.getNIK)(path.split('/').pop());
  }
}, {
  path: '/login',
  exact: true,
  isAuth: false,
  component: _Login2.default
}];

exports.default = routes;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(9);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(10);

var _server2 = _interopRequireDefault(_server);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _csurf = __webpack_require__(20);

var _csurf2 = _interopRequireDefault(_csurf);

var _expressSession = __webpack_require__(21);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = __webpack_require__(22);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(23);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _serializeJavascript = __webpack_require__(24);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _crypto = __webpack_require__(25);

var _expressValidator = __webpack_require__(26);

var _reactRouterDom = __webpack_require__(3);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var csrfProtection = (0, _csurf2.default)({ cookie: true });

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use((0, _cookieParser2.default)());
app.use((0, _expressSession2.default)({
  name: 'session', // name of the cookie
  secret: 'MAKE_THIS_SECRET_SECURE', // key to encode session
  maxAge: 24 * 60 * 60 * 1000, // cookie's lifespan
  sameSite: 'lax', // controls when cookies are sent
  path: '/', // explicitly set this for security purposes
  secure: process.env.NODE_ENV === 'production', // cookie only sent on HTTPS
  httpOnly: true // cookie is not available to JavaScript (client)
}));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
// for parsing application/xwww-
app.use(_express2.default.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000", "http://192.168.99.1:4000");
  res.header("Access-Control-Allow-Methods", 'GET, POST');
  res.header("Access-Control-Allow-Credentials", 'true');
  next();
});
app.use(_express2.default.static('public'));
app.post('/', [(0, _expressValidator.check)("csrf", "csrf is required").not().isEmpty()], function (req, res) {
  var errors = (0, _expressValidator.validationResult)(req);
  // check for errors
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  var csrf = req.body.csrf;

  if (csrf !== req.session.csrf) {
    return res.status(403).json({ msg: "Forbiden 403" });
  } else {
    return res.send('CSRF Match');
  }
});

app.post('/ktp', function (req, res) {
  var nik = req.body.nik;

  _axios2.default.post('http://localhost:8000/ktp/profile', { nik: nik }, {
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
    }
  }).then(function (response) {
    res.send('\n        <div>\n          <p>' + response.data.nama_lengkap + '</p>\n        </div>\n      ');
  }).catch(function (err) {
    return res.json([]);
  });
});

app.post('/advanced', function (req, res) {
  var nama_lengkap = req.body.nama_lengkap;

  _axios2.default.post('http://localhost:8000/ktp/search', {
    nama_lengkap: nama_lengkap,
    nama_lengkap_method: "LIKE"
  }, { headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
    } }).then(function (response) {
    res.json(response.data);
  });
});
app.get('*', function (req, res, next) {
  var activeRoute = _routes2.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(req.url, route);
  }) || {};
  var promise = activeRoute.fetchInitialData ? activeRoute.fetchInitialData(req.path) : Promise.resolve();
  promise.then(function (data) {
    console.log(data);
    var context = { data: data };
    if (req.session.csrf === undefined) {
      req.session.csrf = (0, _crypto.randomBytes)(100).toString('hex');
    }
    var _csrf = '' + req.session.csrf;
    var name = "Juragan";
    var markup = _server2.default.renderToString(_react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store.store },
        _react2.default.createElement(_App2.default, {
          name: name,
          _csrf: _csrf
        })
      )
    ));
    res.send('\n    <!DOCTYPE html>\n    <html lang="id">\n        <head>\n            <title>SSR With React Router</title>\n            <script src="/bundle.js" defer></script>\n\n        </head>\n        <body>\n            <div id="app">' + markup + '</div>\n            <script>window.___INITIAL_DATA___ = ' + (0, _serializeJavascript2.default)({ name: name, _csrf: _csrf }) + '</script>\n        </body>\n    </html>\n  \n  ');
  }).catch(next);
});

app.listen(4000, function () {
  console.log('App Running on PORT 4000');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _ScrollToTop = __webpack_require__(12);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _TheLayout = __webpack_require__(13);

var _TheLayout2 = _interopRequireDefault(_TheLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var name = _ref.name,
      _csrf = _ref._csrf,
      auth = _ref.auth;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0, _react.useState)(_csrf),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      callb = _useState6[0],
      setCallb = _useState6[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    _axios2.default.post('/', { csrf: data }, { headers: { "Content-Type": "application/json" } }).then(function (r) {
      setCallb(r.data);
    });
  };
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _ScrollToTop2.default,
      null,
      _react2.default.createElement(_TheLayout2.default, null)
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(App);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var location = this.props.location;

      if (location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return ScrollToTop;
}(_react.Component);

ScrollToTop.propTypes = {
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string
  }).isRequired,
  children: _propTypes2.default.element.isRequired
};
exports.default = (0, _reactRouterDom.withRouter)(ScrollToTop);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Topbar = __webpack_require__(17);

var _Topbar2 = _interopRequireDefault(_Topbar);

var _PrivateRoute = __webpack_require__(18);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _NotMatch = __webpack_require__(19);

var _NotMatch2 = _interopRequireDefault(_NotMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TheLayout = function TheLayout(_ref) {
  var auth = _ref.auth;

  return _react2.default.createElement(
    'div',
    null,
    auth.isAuthenticated && _react2.default.createElement(_Topbar2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _routes2.default.map(function (_ref2) {
        var path = _ref2.path,
            exact = _ref2.exact,
            C = _ref2.component,
            rest = _ref2.rest,
            isAuth = _ref2.isAuth;
        return !isAuth ? _react2.default.createElement(_reactRouterDom.Route, { key: path, path: path, exact: exact, render: function render(props) {
            return _react2.default.createElement(C, _extends({}, props, rest));
          } }) : _react2.default.createElement(_PrivateRoute2.default, { key: path, path: path, exact: exact, component: C });
      }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _NotMatch2.default })
    )
  );
};

TheLayout.propTypes = {};
var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(TheLayout);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Home = function Home(props) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)({
    nama_lengkap: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formdata = _useState4[0],
      setFormdata = _useState4[1];

  var handleChange = function handleChange(e) {
    return setFormdata(_defineProperty({ formdata: formdata }, e.target.name, e.target.value));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    _axios2.default.post('http://localhost:4000/advanced', {
      nama_lengkap: formdata.nama_lengkap
    }, { headers: {
        "Content-Types": "application/json"
      } }).then(function (res) {
      setData(res.data);
    }).catch(function (err) {
      console.log(err);
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement('input', { type: 'text', name: 'nama_lengkap', onChange: handleChange }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit'
        )
      )
    ),
    Object.keys(data).length > 0 && data.data.map(function (item, index) {
      return _react2.default.createElement(
        'p',
        { key: index },
        ' ',
        item.nama_lengkap
      );
    })
  );
};
Home.propTypes = {
  // children: PropTypes.element.isRequired
};
exports.default = Home;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
  return _react2.default.createElement(
    'h1',
    null,
    'Login'
  );
};

exports.default = Login;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNIK = getNIK;

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNIK(_ref) {
  var nik = _ref.nik;


  return _axios2.default.post('http://localhost:8000/ktp/profile', { nik: nik }, { headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvbG9naW4iLCJpYXQiOjE2MTA0NDY4NjksImV4cCI6MTYxOTA4Njg2OSwibmJmIjoxNjEwNDQ2ODY5LCJqdGkiOiJ0ZE9MRXg5UlV4UThaN3JaIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.T-fZww9c0Nwxw7VAUNlxnxnOZFMQzkuHLGfGrIfLOcU"
    } }).then(function (res) {
    return res.data;
  }).catch(function (err) {
    console.warn(err);
    return [];
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topbar = function Topbar() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Topbar'
      )
    )
  );
};

exports.default = Topbar;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _ref.rest,
      isAuthenticated = _ref.isAuthenticated,
      token = _ref.token;
  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
          pathname: "/login",
          state: { status: false }
        }
      });
    }
  }));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {})(PrivateRoute);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotMatch = function NotMatch() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Not Found'
    )
  );
};

exports.default = NotMatch;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _redux = __webpack_require__(6);

var _reduxDevtoolsExtension = __webpack_require__(28);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};
var middleware = [_reduxThunk2.default];

var store = exports.store = (0, _redux.createStore)(_reducers.rootReducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)(_redux.applyMiddleware.apply(undefined, middleware)));

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = undefined;

var _redux = __webpack_require__(6);

var _auth = __webpack_require__(31);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = exports.rootReducer = (0, _redux.combineReducers)({
  auth: _auth2.default
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case "1":
      return {
        state: state,
        loading: false
      };
    default:
      return state;
  }
};

var initialState = {
  token: null,
  isAuthenticated: false,
  loading: true,
  msg: false
};

/***/ })
/******/ ]);