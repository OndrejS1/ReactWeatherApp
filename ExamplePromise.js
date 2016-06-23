
getTemplCallback("Philadelphia", function (err, temp) {

		if (err) {

			console.log("error", err);
		else {

			console.log("sucess", temp)

			}
		}

	});



function getTempPromise (location){

	return new Promise(function (resolve, reject){
		resolve(79);
		reject("City not found");

	});
} 

getTempPromise("Philadelphia").then(function (){
	console.log("Promise sucess", temp);
}, function (err) {
	console.log("promise error", err);
})