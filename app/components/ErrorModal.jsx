var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");


var ErrorModal = React.createClass({



		getDefaultProps: function () {
			return {

				tittle: "Error"
		
		};

	},
	propTypes: {

		tittle: React.PropTypes.string,
		message: React.PropTypes.string.isRequired

	},
	componentDidMount: function(){

		var {tittle, message} = this.props;

		var modalMarkUp = <div id="error-modal" className="reveal tiny text-center" data-reveal="">

				<h4>{tittle}</h4>
				<p> {message} </p>

				<p>
					<button ClassName="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>;

		var $modal = $(ReactDOMServer.renderToString(modalMarkUp));	
		$(ReactDOM.findDOMNode(this)).httml($modal);

		var modal = new Foundation.Reveal($("#error-modal"));
		modal.open();
	},


	render: function(){

		

		return(
			<div>

			</div>
			)
	}
});


module.exports = ErrorModal;