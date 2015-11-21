require("../css/listItem.css");
require("../css/normalize.css");
require("../css/funderDetail.css");
require("../css/listitem.css");
require("../css/registerForm.css")
require("../css/loginRegister.css")


var React = require('react');
var ReactDOM = require('react-dom');

var FunderDetail = require('./components/funderDetail.jsx');
var FunderView = require("./components/funderView.jsx");
var GuestView = require("./components/guestView.jsx");
var ListDetail = require("./components/listDetail.jsx");
var ListItem = require('./components/listitem.jsx');
var ListView = require("./components/listView.jsx");
var RegisterForm = require("./components/registerForm.jsx");
var LoginRegister = require("./components/loginRegister.jsx");


ReactDOM.render(<FunderView />, document.getElementById("funderView"));
ReactDOM.render(<GuestView />, document.getElementById("guestView"));
ReactDOM.render(<ListDetail />, document.getElementById("listDetail"));
ReactDOM.render(<ListItem />, document.getElementById('listItem'));
ReactDOM.render(<ListView />, document.getElementById("listView"));
ReactDOM.render(<RegisterForm />, document.getElementById("registerForm"));
ReactDOM.render(<LoginRegister/>, document.getElementById("loginRegister"));



// var FunderDetail = require('./components/funderDetail.jsx');
// var GuestView = require("./components/guestView.jsx");
// var ListDetail = require("./components/listDetail.jsx");
// var ListItem = require('./components/listitem.jsx');
// var ListView = require("./components/listView.jsx");
// var RegisterForm = require("./components/registerForm.jsx");
// var LoginRegister = require("./components/loginRegister.jsx");

// ReactDOM.render(<FunderDetail />, document.getElementById('funderDetail'));

// ReactDOM.render(<GuestView />, document.getElementById("guestView"));
// ReactDOM.render(<ListDetail />, document.getElementById("listDetail"));
// ReactDOM.render(<ListItem />, document.getElementById('listItem'));
// ReactDOM.render(<ListView />, document.getElementById("listView"));
// ReactDOM.render(<RegisterForm />, document.getElementById("registerForm"));
// ReactDOM.render(<LoginRegister/>, document.getElementById("loginRegister"));










