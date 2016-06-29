var React = require("react");

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
		var modal = new Foundation.Reveal($("#error-modal"));
		modal.open();
	},


	render: function(){

		var {tittle, message} = this.props;

		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">

				<h4>{tittle}</h4>
				<p> {message} </p>

				<p>
					<button ClassName="button hollow" data-close="">
						Okay
					</button>
				</p>
			</div>
			);
	}

});


module.exports = ErrorModal;