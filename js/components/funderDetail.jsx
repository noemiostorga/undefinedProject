var React = require('react'); 
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

require('../../css/funderDetail.css');

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
    });
        console.log(DetailFunder);
        

        ReactDOM.render(<FunderDetail data={DetailFunder}/>, document.getElementById('funderDetail'));
    },

    error: function(error) {
        console.log(error);
    }
  });




    var FunderDetail = React.createClass({


	render: function () {
	var here_one = this.props.data.map(function(obj){
		console.log(obj);
	
		return (	
			<div className="detailView">
				<ul className="detailview">
					<li><img id="pics" src={obj.image}/></li>
					<li id="detTitle">{obj.name}</li>
					<li id="detPrice">{obj.price}</li>
					<li><a id="takeMeLink" href={obj.item_link}>Share this Link</a></li>
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


