"use strict"

var React = require('react');
var ReactDom = require('react-dom');

var Routes = require('./routes');

var AuthorStore = require('./stores/authorStore');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();


ReactDom.render(<Routes />, document.getElementById('app'));
