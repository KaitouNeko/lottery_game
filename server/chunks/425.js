"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AX": () => (/* binding */ SET_THEME_KEY),
/* harmony export */   "zr": () => (/* binding */ SET_MEMBER_LIST),
/* harmony export */   "ve": () => (/* binding */ SET_WINNER)
/* harmony export */ });
const SET_THEME_KEY = 'SET_THEME_KEY';
const SET_MEMBER_LIST = 'SET_MEMBER_LIST';
const SET_WINNER = 'SET_WINNER';

/***/ }),

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ redux_withRedux)
});

// UNUSED EXPORTS: getInitializeStore

// EXTERNAL MODULE: ../../node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(151);
// EXTERNAL MODULE: ../../node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(365);
// EXTERNAL MODULE: ./themes/themeTypes.js
var themeTypes = __webpack_require__(60);
// EXTERNAL MODULE: ./lib/redux/action/types.js
var types = __webpack_require__(62);
;// CONCATENATED MODULE: ./lib/redux/reducer/themeKey.js


const initialState = {
  themeKey: themeTypes/* DARK */.P
};

const themeKey = (state = initialState, action) => {
  switch (action.type) {
    case types/* SET_THEME_KEY */.AX:
      return action.themeKey;

    default:
      return state;
  }
};

/* harmony default export */ const reducer_themeKey = (themeKey);
;// CONCATENATED MODULE: ./lib/redux/reducer/memberList.js

const memberList_initialState = {
  memberList: []
};

const memberList = (state = memberList_initialState, action) => {
  switch (action.type) {
    case types/* SET_MEMBER_LIST */.zr:
      return [...action.memberList];

    default:
      return state;
  }
};

/* harmony default export */ const reducer_memberList = (memberList);
;// CONCATENATED MODULE: ./lib/redux/reducer/winner.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const winner_initialState = {
  winner: null
};

const winner = (state = winner_initialState, action) => {
  switch (action.type) {
    case types/* SET_WINNER */.ve:
      return _objectSpread({}, action.winner);

    default:
      return state;
  }
};

/* harmony default export */ const reducer_winner = (winner);
;// CONCATENATED MODULE: ./lib/redux/reducer/index.js




/* harmony default export */ const reducer = ((0,redux/* combineReducers */.UY)({
  themeKey: reducer_themeKey,
  memberList: reducer_memberList,
  winner: reducer_winner
}));
;// CONCATENATED MODULE: ./lib/redux/store.js


const store_initialState = {
  themeKey: '',
  memberList: [],
  winner: null
};
const initializeStore = (preloadedState = store_initialState) => {
  const middles = [];

  let rootWrapper = f => f;

  if (false) {}

  return (0,redux/* createStore */.MT)(reducer, preloadedState, rootWrapper((0,redux/* applyMiddleware */.md)(...middles)));
};
/* harmony default export */ const store = ((/* unused pure expression or super */ null && (initializeStore)));
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./lib/redux/withRedux.js
const _excluded = ["initialReduxState"];

function withRedux_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function withRedux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withRedux_ownKeys(Object(source), true).forEach(function (key) { withRedux_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withRedux_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withRedux_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




let reduxStore;
const getInitializeStore = initialState => {
  if (true) {
    return initializeStore(initialState);
  }

  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

const withRedux = PageComponent => {
  const createWrapper = _ref => {
    let {
      initialReduxState
    } = _ref,
        props = _objectWithoutProperties(_ref, _excluded);

    const store = getInitializeStore(initialReduxState);
    return /*#__PURE__*/jsx_runtime_.jsx(es/* Provider */.zt, {
      store: store,
      children: /*#__PURE__*/jsx_runtime_.jsx(PageComponent, withRedux_objectSpread({}, props))
    });
  };

  return createWrapper;
};

/* harmony default export */ const redux_withRedux = (withRedux);

/***/ }),

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ LIGHT),
/* harmony export */   "P": () => (/* binding */ DARK)
/* harmony export */ });
const LIGHT = 'LIGHT';
const DARK = 'DARK';

/***/ })

};
;