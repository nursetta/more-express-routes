// requirements
var express = require('express'),
    app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
    // send back the response: 'Hello World'
    res.send("Hello World");
});

app.get("/pickacolor/:color", function (req, res) {
    var color = req.params.color;
    res.send("You picked: " + color);
});

app.get("/pickanumber", function (req, res) {
    var number = parseInt(req.query.number);
	var correctAnswer = 7;
	if (number === correctAnswer) {
		res.send("Nailed It!");
	} else if (number < correctAnswer) {
		res.send("Too Low!");
	} else {
		res.send("Too High!");
	}   
	    res.send("You picked " + number + "!");
});

app.get('/burgers/:index', function (req, res) {
	var index = req.params.index;
	var choice = burgers[index];
	res.send(choice);
});

app.get('/tacos/:index', function (req, res) {
	var index = req.params.index;
	var choice = tacos[index];
	res.send(choice);
});

// start the server
app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});
