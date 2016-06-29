var React = require("react");


var About = () => {

	return (

		<div>
			<h1 className="text-center"> About </h1>
			<p> Simple Weather app made for practice porpuses using 3rd party API from OpenWeather.org. </p>
			<p> This is Weather App devoloped by Ondřej Svojše </p>
			<ol>
				<li>

					<a href="https://facebook.github.io/react"> React </a> - This was the Javascript framework used.

				</li>

				<li>

					<a href="http://openweathermap.org"> Open Weather Map </a> - Third party API providing weather datas.

				</li>

			</ol>
		</div>
			);

};


module.exports = About;
