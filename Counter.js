"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function Counter() {
  var [counter, setCounter] = (0, _react.useState)(0);
  var handleClick1 = () => {
    setCounter(counter + 1);
  };
  var handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)("div", {
      children: "Counter App"
    }), (0, _jsxRuntime.jsx)("div", {
      children: counter
    }), (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)("button", {
        onClick: handleClick1,
        children: "Increment"
      }), (0, _jsxRuntime.jsx)("button", {
        onClick: handleClick2,
        children: "Decrement"
      })]
    })]
  });
}
var _default = exports.default = Counter;