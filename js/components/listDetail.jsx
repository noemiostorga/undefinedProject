var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var ListDetail = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="listDetailHeader">
					<h1>List Detail View</h1>
					<h2>XXXXXXX List</h2>
					<p>URL</p>
					<button id="editListButton">Edit List</button>
				</div>

				<div id="listDetailList">
					<ul>
					 	<li className="listDetailLi"></li>
					</ul>
				</div>

				<div id="addListView">
					<button id="addListDetailButton">Add Item</button>
				</div>

			</div>
		)
	}
});


module.exports = ListDetail;

var DetFundView = Backbone.Model.extend({
		initialize: function() {
			console.log("a new detfund has been created");
		}
		
});
var FundView = Backbone.Collection.extend({
	url: "https://afternoon-scrubland-9189.herokuapp.com/api/lists/"
});
var fundView = new FundView();
fundView.fetch({
	success: function(resp) {
		console.log(resp.toJSON());
	},
	error: function(error) {
		console.log(error);
	}
});
var test = new FundView();
test.set({
	'title': 'test',
	'user': 2,
	
});






















