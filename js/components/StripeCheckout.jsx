var React = require('react'); 
var ReactDOM = require('react-dom');
var Backbone = require('backbone');





var TakeMoney = React.createClass({
	render: function () {

	<div>
	
<head>
  <!-- Stripe.js used; fewer compliance requirements! -->
  <!-- Include Stripe.js, either in your <head> or as a direct descendant of <body>
  at the end of the page -->
  <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
</head>

<body>
<!-- Now change all the name attributes on your credit card inputs to data-stripe instead -->
  <form action="" method="POST" id="payment-form">
      <!-- Add a section to display errors if you want -->
      <span class='payment-errors'></span>
      <input data-stripe="number"/>
      <input data-stripe="cvc"/>
      <input data-stripe="exp-month"/>
      <input data-stripe="exp-year"/>
      <button type="submit">Submit Payment</button>
  </form>
</body>
Now, we just add another script section in our <head> to ask Stripe.js to send our card details to Stripe and get back a token:

<head>
  <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript">
    Stripe.setPublishableKey('YOUR_PUBLISHABLE_KEY');

   var stripeResponseHandler = function(status, response) {
     var $form = $('#payment-form');

     if (response.error) {
       // Show the errors on the form
       $form.find('.payment-errors').text(response.error.message);
       $form.find('button').prop('disabled', false);
     } else {
       // token contains id, last4, and card type
       var token = response.id;
       // Insert the token into the form so it gets submitted to the server
       $form.append($('<input type="hidden" name="stripeToken" />').val(token));
       // and re-submit
       $form.get(0).submit();
     }
   };

   jQuery(function($) {
     $('#payment-form').submit(function(e) {
       var $form = $(this);

       // Disable the submit button to prevent repeated clicks
       $form.find('button').prop('disabled', true);

       Stripe.card.createToken($form, stripeResponseHandler);

       // Prevent the form from submitting with the default action
       return false;
     });
   });
 </script>
</head>
	</div>
	}
});

module.exports = TakeMoney;























