window.ReactTestUtils = require('react-addons-test-utils');
window.React = require('react');

var context = require.context('./js/components', true, /Test\.js$/);
context.keys().forEach(context);