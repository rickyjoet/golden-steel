"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _jquery["default"])(document).ready(function () {
  console.log("jquery ready");
  (0, _jquery["default"])('.mobile-nav .lines').on('click', function (e) {
    console.log('mobile nav clicked');
    (0, _jquery["default"])('.navigation ul').addClass('show-nav');
  });
  (0, _jquery["default"])('.navigation ul li.mobile .lines').on('click', function (e) {
    console.log('clicked close icon');
    (0, _jquery["default"])('.navigation ul').removeClass('show-nav');
  });
  var date = new Date();
  date = date.getFullYear();
  (0, _jquery["default"])('.year').text(date);
});
//# sourceMappingURL=scripts.js.map
