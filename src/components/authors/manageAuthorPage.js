"use strict"

var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    
    getInitialState: function() {
        return{
            author: { id: '', firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },
    
    componentDidMount: function () {
        var authorId = this.props.params.id;
        if(authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
        
    },
    
    setAuthorState: function (event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    
    authorFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};
        
        if(this.state.author.firstName.length < 3 ){
            this.state.errors.firstName = 'First Name must be at least 3 characters';
            formIsValid = false;
        }
        
        if(this.state.author.lastName.length < 3 ){
            this.state.errors.lastName = 'Last Name must be at least 3 characters';
            formIsValid = false;
        }
        
        this.setState({errors: this.state.errors});
        
        return formIsValid;
    },
    
    saveAuthor: function(event){
        event.preventDefault();
        
        if(!this.authorFormIsValid()){
            return;
        }
        
        if(this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        this.setState({dirty: false});
        toastr.success('Author Saved.');
        this.context.router.push('/authors');
    },
    
    render: function(){
        return(
            <AuthorForm 
                author={this.state.author}
                onChange={this.setAuthorState} 
                onSave={this.saveAuthor}
                errors={this.state.errors}/>
        );
    }
});

module.exports = ManageAuthorPage;