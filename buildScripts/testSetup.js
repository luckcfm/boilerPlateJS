//This file isnt transpiled, so must use CommonJS and ES5

//register babel to transpile before our tests run
require('babel-register')();


//disable webpack features that Mocha doenst understand
require.extensions['.css'] = function() {};
