var React = require('react');
var ReactDOM = require('react-dom');

var RegisterForm = React.createClass({
	_submit: function(e) {
		var model= new User();
	model.set ({
	username:$("#userNameForm").val(),
	email:$("#emailForm").val(),
	password:$("#passwordForm").val(),
	});
	
	e.preventDefault();

	model.save(null,{
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/",
	success:function(resp) {
		console.log(resp);
	},
	error:function(err) {
		console.log(err);
	}

});
		
	},
	render: function(){
			return(
				<div id="registerDiv">
				<div id = "header">
					<h2>Register</h2>
				</div>
					<form id="registerForm" onSubmit={this._submit}>
					<div id="inputDiv">
						<input id="fName" placeholder="First Name"/>
						<input id="lName" placeholder="Last Name"/>
						<input id="emailForm" placeholder="email"/>
						<input id="userNameForm" placeholder="Username"/>
						<input id="passwordForm" placeholder="password"/>
						<button id="submitReg" type="submit">Submit</button>
					</div>
					</form>
				</div>
			)
	}
})

module.exports = RegisterForm;

////Backbone

var User = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});

var UserInput = Backbone.Collection.extend({

	url: "https://afternoon-scrubland-9189.herokuapp.com/api/users/"
});


	











