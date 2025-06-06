# es-blur <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

A drop-in shim/polyfill/replacement for `window.blur()` that works as far down as ES3.

## Installation

Using NPM:
```bash
$ npm install --save es-blur
```
Using Yarn:
```bash
$ yarn add es-blur
```

## Usage

If you want to shim `blur` into a global variable, use like this:

```js
require('es-blur/auto')

console.log(blur) // Output: [Function: blur]
```

If you just want to require the implementation, do this instead:

```js
var blur = require('es-blur/implementation')

console.log(blur) // Output: [Function: blur]
```