var React = require('react');
var ReactDOM = require('react-dom');

var ListView = React.createClass({
	render: function () {
		return(
			
			<div>
				<div id="listMakerHeader">
					<h1>List Maker View</h1>
				</div>

				<div id="myLists">
					<h2>My Lists</h2>
					<ul>
					 	<li className="myListLi"></li>
					</ul>
					<button id="addListButton">Add New List</button>
				</div>

				<div id="myPledgesHeader">
					<h2>My Pledges</h2>
				</div>

				<div>
					<ul id="myPledgesUL">
						<li className="myPledgesLi"></li>
					</ul>
				</div>

				<div id="totalPledges">
					<p className="totalPledgesP">Total Pledges:<span className="totalPledgesSp"></span></p>
				</div>

			</div>
			)
		}
	
});

	
				







module.exports = ListView;








