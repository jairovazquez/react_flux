"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var About = require('./components/about/aboutPage');

var Routes = React.createClass({
   render: function () {
       return(
    <Router history={hashHistory}>
        <Route path="/" component={require('./components/app')}>
            <IndexRoute component={require('./components/homePage')} />
            <Route path="/about" component={About}/>
            <Route path="/authors" component={require('./components/authors/authorPage')}/>
            <Route path="/author" component={require('./components/authors/manageAuthorPage')}/>
            <Route path="/author/:id" component={require('./components/authors/manageAuthorPage')}/>
            <Redirect from="/about-us" to="/about"/>
            <Redirect from="/about/*" to="/about"/>
            <Redirect from="/awthors" to="/authors"/>
            <Route path="*" component={require('./components/notFoundPage')}/>
        </Route>
    </Router>
    );
    }
});

module.exports = Routes;
