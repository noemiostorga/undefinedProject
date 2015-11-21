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
        var test_one =resp.toJSON();

        var mapped_one = test_one[0].results.map(function(obj){
        	return {
        		'item_set': obj.item_set
        	}
        });

        
        var DetailFunder=mapped_one[0].item_set.map(function(obj){
        	return {
        	'image':obj.image,
        	'name' : obj.name,
        	'price' : obj.price,
        	'item_link' : obj.item_link

        }
    })
        

        ReactDOM.render(<FunderDetail data={DetailFunder}/>, document.getElementById('funderDetail'));
    },
    error: function(error) {
        console.log(error);
    }


  });

    var FunderDetail = React.createClass({
	render: function () {
	var here_one = this.props.data.map(function(obj){
		
	
		return (	
			<div>
				<ul>
					<li><img id="pics"/>{obj.image}</li>
					<li>{obj.name}</li>
					<li id="price">{obj.price}amount</li>
					<li>{obj.item_link}</li>
					<li><button>submit</button></li>
					<li> <div>progress</div></li>
					<li> to go til goal</li>
						
				</ul>
			</div>
			)
		});
	return(<div>{here_one}</div>);
}
});







module.exports = FunderDetail; 


