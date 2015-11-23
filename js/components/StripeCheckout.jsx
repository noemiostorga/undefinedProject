var React = require('react'); 
var ReactDOM = require('react-dom');
var Backbone = require('backbone');





var TakeMoney = React.createClass({
	render: function () {

	<div>
		<form action="" method="POST">
		    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
		    data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
		    data-amount="2000"
		    data-name="Demo Site"
		    data-description="2 widgets ($20.00)"
		    data-image="/128x128.png"
		    data-locale="auto">
		</form>
		<form action="" method="POST" id="payment-form">
		  <span class="payment-errors"></span>

		  <div class="form-row">
		    <label>
		      <span>Card Number</span>
		      <input type="text" size="20" data-stripe="number"/>
		    </label>
		  </div>

		  <div class="form-row">
		    <label>
		      <span>CVC</span>
		      <input type="text" size="4" data-stripe="cvc"/>
		    </label>
		  </div>

		  <div class="form-row">
		    <label>
		      <span>Expiration (MM/YYYY)</span>
		      <input type="text" size="2" data-stripe="exp-month"/>
		    </label>
		    <span> / </span>
		    <input type="text" size="4" data-stripe="exp-year"/>
		  </div>

		  <button type="submit">Submit Payment</button>
		</form>
	</div>
	}
});

module.exports = TakeMoney;























