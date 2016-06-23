var React = require("react");
var {Link, IndexLink} = require("react-router");




var Nav = () => {


		return (
			<div>	
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bolder"}}> Get Weather </IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bolder"}}> About </Link>
				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bolder"}}> Examples </Link>

			</div>
			);




};

module.exports = Nav;