"use strict";

var _client = require("react-dom/client");
var _Button = _interopRequireDefault(require("./Button"));
var _Counter = _interopRequireDefault(require("./Counter"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)("h1", {
      children: "Hello React !"
    }), (0, _jsxRuntime.jsx)(_Button.default, {}), (0, _jsxRuntime.jsx)("hr", {}), (0, _jsxRuntime.jsx)(_Counter.default, {})]
  });
}
var root = (0, _client.createRoot)(document.getElementById("root"));
root.render((0, _jsxRuntime.jsx)(App, {}));