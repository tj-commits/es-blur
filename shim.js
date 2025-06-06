"use strict";

var getPolyfill = require("./polyfill");
var shimHelper = require("./shim-helper");

function shim() {
  try {
    shimHelper(window, "blur", getPolyfill)();
  } catch {}
  try {
    shimHelper(global, "blur", getPolyfill)();
  } catch {}
  try {
    shimHelper(self, "blur", getPolyfill)();
  } catch {}
  try {
    shimHelper(globalThis, "blur", getPolyfill)();
  } catch {}
}

module.exports = shim;
