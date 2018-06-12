var Addition = require('./addition.js');
var Calc1 = require('./calculator1.js');
var { add, sub } = require('./calculator1.js');
var Calc2 = require('./calculator2.js');
var { addition } = require('./calculator2.js');
var Son = require('./son.js');

var http = require('http');
var fs = require('fs');

console.log('Welcome to Node Demo');
console.log('Addition of 2 and 3 is ' + Addition(2, 3));
console.log('Addition of 2 and 3 is ' + Calc1.add(2, 3));
console.log('Addition of 2 and 3 is ' + add(2, 3));
console.log('Subtraction of 2 and 3 is ' + sub(2, 3));
console.log('Addition of 2 and 3 is ' + Calc2.addition(2, 3));
console.log('Addition of 2 and 3 is ' + addition(2, 3));

var s1 = new Son();
console.log(s1.getName() + ', ' + s1.getGender() + ', ' + s1.getCity());

/*
http.createServer(function(req, res) {
	console.log('Page Requested');
	res.end('Welcome to Node Demo');
} ).listen(3000);
*/

http.createServer((req, res) => {
	fs.readFile('pages/demo7.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3000);