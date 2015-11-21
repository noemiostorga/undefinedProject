var React = require('react');
var ReactDOM = require('react-dom');

var LoginRegister = React.createClass({
	render: function(){
		return(
			<div id="formContainer">
				<div id="loginHeader">
				<span id="log">Login</span>
				<span id="reg">Register</span>
				</div>
				<div id="login">
					
					<form>
						
						<input id="userName" placeholder="Username"/>
						
						<input id="password" placeholder="Password"/>
						<button type='submit'>Submit</button>
					</form>
				</div>

				<div id="register">
					
					<form>
						
						<input id="email" placeholder="Your Email"/>
						<button id="signUp">Sign Up</button>
						<button id="guest">Guest</button>
					</form>
				</div>
			</div>


		)
	}
})

module.exports = LoginRegister;