
var React = require('react');
var ReactDOM = require('react-dom');

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
