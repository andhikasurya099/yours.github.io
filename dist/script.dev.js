"use strict";

function showSlide2() {
  document.getElementById('slide1').style.display = 'none';
  document.getElementById('slide2').style.display = 'flex';
}

onload = function onload() {
  var c = setTimeout(function () {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
//# sourceMappingURL=script.dev.js.map
