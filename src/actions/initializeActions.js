"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');

var InitializeActions = {
    initApp: function () {
        var _authors = AuthorApi.getAllAuthors();
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            authors: _authors
        });
    }
};

module.exports = InitializeActions;