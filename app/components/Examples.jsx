var React = require("react");
var {Link} = require("react-router");


var Examples = (props) => {


return (

		<div>
			<h1> Examples component </h1>
			<p> This are examples of Work of this app </p>
			<ol>
				<li> 

					<Link to="/?location=Philadelphia">Philadelphia, US </Link> 


				</li>
				<li> 

					<Link to="/?location=Rio">Rio, Brazil </Link>
				</li>
			</ol>
		</div>
			);

};

module.exports = Examples;