var React = require('react'); 
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


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
    success: function(resp) {
        var test =resp.toJSON();
        console.log(test[0]);
        var mapped=test[0].results.map(function(obj){
        	return {
        	'image':obj.image,
        	'name' : obj.name,
        	'price' : obj.price,
        	'item_link' : obj.item_link

        }
    })
        console.log(mapped);
    },
    error: function(error) {
        console.log(error);
    }


  })

    var FunderDetail = React.createClass({
	render: function (mapped) {
	
		return (	
			<div>
				<ul>
					<li><img id="pics"/>{this.props.image}</li>
					<li>{this.props.name}</li>
					<li id="price">{this.props.price}amount</li>
					<li>{this.props.image}</li>
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
ReactDOM.render(<FunderDetail />, document.getElementById('funderDetail'));

