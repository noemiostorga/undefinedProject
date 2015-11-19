var React = require('react');
var ReactDOM = require('react-dom');

var RegisterForm = React.createClass({
	render: function(){
			return(
				<div id="registerDiv">
					<form id="registerForm">
						<label>First Name:</label>
						<input id="fName"/>
						<label>Last Name:</label>
						<input id="lName"/>
						<label>Email:</label>
						<input id="email"/>
						<label>Address:</label>
						<input id="address"/>
						<label>City:</label>
						<input id="city"/>
						<label>Zip:</label>
						<input id="zip"/>
						<label>Phone Number:</label>
						<input id="phoneNumber"/>
						<label id="creditLabel">Credit Card:</label>
						<input id="creditCard"/>
						<input id="cvc" placeholder="CVC"/>
						<label id="expLab">Expiration</label>
						<div>
							<select name='expireMM' id='expireMM'>
							    <option value=''>Month</option>
							    <option value='01'>Janaury</option>
							    <option value='02'>February</option>
							    <option value='03'>March</option>
							    <option value='04'>April</option>
							    <option value='05'>May</option>
							    <option value='06'>June</option>
							    <option value='07'>July</option>
							    <option value='08'>August</option>
							    <option value='09'>September</option>
							    <option value='10'>October</option>
							    <option value='11'>November</option>
							    <option value='12'>December</option>
							</select>
							<select name='expireMM' id='expireMM'>
							    <option value=''>Year</option>
							    <option value='15'>2015</option>
							    <option value='16'>2016</option>
							    <option value='17'>2017</option>
							    <option value='18'>2018</option>
							    <option value='19'>2019</option>
							    <option value='20'>2020</option>
							    
							</select> 
						</div>
						<button id="submitReg">Submit</button>
					</form>
				</div>
			)
	}
})

module.exports = RegisterForm;