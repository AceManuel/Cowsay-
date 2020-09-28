const manuel = require ("./information.js");


var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${manuel.name} from ${manuel.campus}`,
	e : "oO",
	T : "U "
}));
