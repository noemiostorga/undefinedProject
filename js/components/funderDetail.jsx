var React = require('react'); 
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var FunderDetail = React.createClass({
	render: function () {
	
		return(	
			<div>
				<ul>
					<li><img id="pics"/> picture</li>
					<li>title</li>
					<li id="price">amount</li>
					<li>url</li>
					<label><input /></label>
					<li><button>submit</button></li>
					<li> <div>progress</div></li>
					<li> to go til goal</li>
						
				</ul>
			</div>
			)
		}
});



module.exports = FunderDetail; 

var DetFundDet = Backbone.Model.extend ({
	
	initialize: function () {
		console.log("A new DetFundDet model  was made");
	}

});

var FundDet = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});

var fundDet = new FundDet();
fundDet.fetch({
	success: function(resp){
		console.log(resp.toJSON);
	},
	error: function(error){
		console.log(err);
	}
});

var testDet = new FundDet();
testDet.set({
	'image' : 'image',
	'name' : 'name'

 
});





