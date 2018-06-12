// private function
var printResult = function(result){
	console.log('Result is '+ result );
}

module.exports.addition = function (x, y) {
	var z = x + y;
	printResult(z);
	return z;
}

module.exports.subtraction = function (x, y) {
	var z = x - y;
	printResult(z);
	return z;
}