var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('../../css/funderView.css')


var FundView = Backbone.Model.extend({
        initialize: function() {
            console.log("a new detfund has been created");
        }
        
});
var TheFundView = Backbone.Collection.extend({
    url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});
var theFundView = new TheFundView();

theFundView.fetch({
    success: function(resp) {
        var test =resp.toJSON();
     	
        var mapped=test[0].results.map(function(obj){
        	return {
        		'item_set':obj.item_set
        	}
        });

     	var namePriceImage=mapped[0].item_set.map(function(obj){
       	return {
       		'name':obj.name,
       		'image':obj.image,
       		'price':obj.price
       	}
       })
     	console.log(namePriceImage);


     	
    
     	
       ReactDOM.render(<FunderView data={namePriceImage}/>, document.getElementById("funderView"));
     
    },

    error: function(error) {
        console.log(error);
    }
});






var FunderView = React.createClass({

	render: function () {
	var here = this.props.data.map(function(obj) {
		console.log(obj);
		return(
			
			   <div id="funderDiv">
                <img id="funderImg" src={obj.image}/>
               	<span>{obj.name}</span>
                <span id="price">{obj.price}</span>
				</div>
				)
		});
		return(<div>{here}</div>);
}	
});



module.exports = FunderView;

