
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var ListItem = React.createClass({
	render: function() {
		return (
			<div>
				<form className="addItemForm">

					<span className="addSpan">Add Item</span>

					<div className="addItemContainer">
						<label>Picture</label>
						<input type="text"/>  <br/>

						<label>Title</label>
						<input id="title" type="text"/> <br/>

						<label id="amount">Amount</label>
						<input type="text"/> <br/>

						<label>Url</label>
						<input type="text"/> <br/>

						<span>Visibility</span>

						<label> Yes</label>
						<input type="radio" />
						<label> No</label>
						<input type="radio" />
					</div>
				</form>
			</div>

			)
	}

});

module.exports = ListItem;

var ListItemView = Backbone.Model.extend ({
	
	initialize: function () {
		console.log("A new ListItemView model  was made");
	}

});

var ItemView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});

var itemView = new ItemView();
itemView.fetch({
	success: function(resp){
		console.log(resp.toJSON());
	},
	error: function(error){
		console.log(err);
	}
});

var testList = new ItemView();
testList.set({
	'image' : 'image',
	'name' : 'name',
	'price': null

 
});































