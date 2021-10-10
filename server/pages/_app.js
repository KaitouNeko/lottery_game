"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ../../node_modules/next/app.js
var app = __webpack_require__(41);
// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__(443);
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);
// EXTERNAL MODULE: ../../node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(119);
;// CONCATENATED MODULE: ./styles/globalStyle.js

const ResetStyle = styled_components_esm/* createGlobalStyle */.vJ`
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
address, caption, cite, code, dfn, em, strong, th, var, b {
  font-weight: normal;
  font-style: normal;
}
abbr, acronym {
  border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  text-size-adjust: 100%;
  box-sizing: border-box;
}
body {
    line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
q {
  &:before,   &:after {
    content: '';
    content: none;
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption, th {
  text-align: left;
}
textarea {
  resize: none;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  padding: 0;
  border: none;
  background: none;
}
`;
const GlobalStyle = styled_components_esm/* createGlobalStyle */.vJ`
html,
body {
  padding: 0;
  margin: 0;
  font-size: 20px;
  text-align: center;
  line-height: 1.4;
  background: ${({
  theme
}) => theme.colors.body};
  color: ${({
  theme
}) => theme.colors.text};
  font-family: ${({
  theme
}) => theme.font};
}
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    -webkit-text-fill-color: #fff;
    -webkit-box-shadow: transparent;
    transition: background-color 5000s ease-in-out 0s;
}

input[type="text"] {
  font: 60px "Lato", Arial, sans-serif;
  width: 3em;
  background: transparent;
  color: #fff;
  text-align: center;
  padding: 7px 0;
  border: 0;
  border-bottom: 1px solid #ccc;
  letter-spacing: 1px;
  &:focus {
    outline: none;
  }
  &::placeholder{
    color: ${({
  theme
}) => theme.colors.input.placeholder};
  }
}

* {
  box-sizing: border-box;
}

`;

;// CONCATENATED MODULE: ./themes/lightTheme.js
const lightTheme = {
  name: 'OceanSeas',
  colors: {
    body: '#9be7ff',
    text: '#0d47a1',
    button: {
      text: '#ffffff',
      backgroundColor: '#6199ca24',
      borderColor: '#00bcd4',
      hoverBackgroundColor: '#00bcd4',
      hoverBorderColor: '#6199ca24'
    },
    link: {
      text: '#0d47a1',
      opacity: 0.8
    },
    timer: {
      fontSize: '3em',
      fontWeight: 400,
      text: 'white',
      textShadow: '0 0 20px #cacbc2',
      tipText: '#fff7e0',
      tipFontSize: '.35em',
      tipFontWeight: 400
    },
    input: {
      placeholder: '#84d4ee'
    },
    title: {
      text: '#84d4ee',
      hoverText: '#0d47a1',
      hoveTextShadow: '#fff',
      boxShadow: '#6494a3'
    },
    modal: {
      backgroundColor: 'rgb(255 255 255 / 90%)',
      text: '#0d47a1'
    }
  },
  font: 'Roboto Condensed, 微軟正黑體, Microsoft JhengHei'
};
/* harmony default export */ const themes_lightTheme = (lightTheme);
;// CONCATENATED MODULE: ./themes/darkTheme.js
const darkTheme = {
  name: 'StarrySky',
  colors: {
    body: 'linear-gradient(to top, #243f6a 0%, #212121 100%)',
    text: '#fff',
    button: {
      text: '#ffffff',
      backgroundColor: '#695828',
      borderColor: '#d2b37e',
      hoverBackgroundColor: '#d2b37e',
      hoverBorderColor: '#695828'
    },
    link: {
      text: 'teal',
      opacity: 1
    },
    timer: {
      fontSize: '3em',
      fontWeight: 400,
      text: 'white',
      textShadow: '0 0 20px #48C8FF',
      tipText: '#B1CDF1',
      tipFontSize: '.35em',
      tipFontWeight: 400
    },
    input: {
      placeholder: '#9e9e9e'
    },
    title: {
      text: '#313a4a',
      hoverText: '#9e9e9e',
      hoveTextShadow: '#9e9e9e',
      boxShadow: '#0c181e'
    },
    modal: {
      backgroundColor: 'rgb(28 30 33 / 90%)',
      text: '#FFF'
    }
  },
  font: 'Roboto Condensed, 微軟正黑體, Microsoft JhengHei'
};
/* harmony default export */ const themes_darkTheme = (darkTheme);
;// CONCATENATED MODULE: ./themes/index.js


const themes = {
  LIGHT: themes_lightTheme,
  DARK: themes_darkTheme
};
/* harmony default export */ const themes_0 = (themes);
// EXTERNAL MODULE: ../../node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(151);
// EXTERNAL MODULE: ./lib/redux/withRedux.js + 5 modules
var withRedux = __webpack_require__(425);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // styled-components



 // redux






function MyApp({
  Component,
  pageProps
}) {
  var _themes$themeKey;

  const themeKey = (0,es/* useSelector */.v9)(state => state.themeKey);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styled_components_esm/* ThemeProvider */.f6, {
    theme: (_themes$themeKey = themes_0[themeKey]) !== null && _themes$themeKey !== void 0 ? _themes$themeKey : themes_0.DARK,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ResetStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

MyApp.getInitialProps = async appContext => {
  const {
    ctx
  } = appContext;
  const {
    req,
    res
  } = ctx;
  const appProps = await app.default.getInitialProps(appContext);

  if (req) {// do something...
  }

  return _objectSpread({}, appProps);
};

MyApp.defaultProps = {
  Component: (noop_default())
};
/* harmony default export */ const _app = ((0,withRedux/* default */.Z)(MyApp));

/***/ }),

/***/ 638:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("lodash/noop");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 857:
/***/ ((module) => {

module.exports = require("react-is");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 558:
/***/ ((module) => {

module.exports = require("shallowequal");

/***/ }),

/***/ 413:
/***/ ((module) => {

module.exports = require("stream");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [119,84,41,425], () => (__webpack_exec__(722)));
module.exports = __webpack_exports__;

})();