const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');

const Handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));


//http://localhost:3000/

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'nodelogin'
});

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static("./"));

// http://localhost:3000/
app.get('/', function (request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});

// http://localhost:3000/auth
app.post('/auth', function (request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/home');

			} else {
				response.send('Incorrect Username and/or Password!');
			}
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


// http://localhost:3000/home
app.get('/home', function (request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		//response.send('Welcome back, ' + request.session.username + '!');
		response.sendFile(path.join(__dirname, '/popup.html'));
	} else {
		// Not logged in
		response.send('Please login to view this page!');
	}
	//response.end();
});

//get signup page
app.get("/signup.html", (request, response) => {
	response.sendFile(path.join(__dirname, '/signup.html'));
});

//allow user to sign up if not a user
app.post('/signup', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.password;
	

	var sql = `INSERT INTO accounts (id, username, password, email) VALUES ("null", "${username}", "${password}", "${email}")`;
	connection.query(sql, function (err, result) {
		if (err) throw err;
		console.log('new account details inserted');
		res.redirect('/popup.html');
	});
});


//get goal setting page
app.get("/goalform", (request, response) => {
	response.sendFile(path.join(__dirname, '/goalform.html'));
});

//post method for goal setting submission to database
// cannot figure out how to make this one work without PHP
app.post('/site.php', function (req, res) {
	var question1 = req.body.question1;
	var question2 = req.body.question2;
	var question3 = req.body.question3;
	var question4 = req.body.question4;
	var question5 = req.body.question5;

	var sql = `INSERT INTO goals (question1, question2, question3, question4, question5) VALUES ("${question1}", "${question2}", "${question3}", "${question4}","${question5}")`;
	connection.query(sql, function (err, result) {
		if (err) throw err;
		console.log('record inserted');
		//response.send('Data added successfully!!');
		res.redirect('/popup.html');
	});
});



// Various attempts to get goal viewing page
// app.get("/goalview", (request, response) => {
// 	response.sendFile(path.join(__dirname, '/goalview.php'));
// });

// app.get('/goalview.html', (request, response) => {
	
// 	connection.query('SELECT * FROM goals', function(err, result){
// 	  console.log("query response is ", result);
// 	  response.json(result);

// 	//   JSON.stringify(result);

// 	})
// 	// connection.end();
//   })


var router = express.Router();

router.get('/goalview.hbs', function(request, response, next) {

  connection.connect();

    connection.query('SELECT * FROM goals', function (error, results, fields) {
		console.log('we did a query');
		if(error) 
		{
			console.log("Error: ",error);
			res.send({
				"code": 400,
				"failed": "Error occurred"
			});
		} else {
			console.log("Results: ",results);
			/*res.send({
				"code": 200,
				"success": "Database successfully logged"
			});*/
			res.render('goalview', {data: results});           
		}
	  
    });
});

module.exports = router;

//get recommendation page
app.get("/recommendation", (request, response) => {
	response.sendFile(path.join(__dirname, '/recommendation.html'));
});


//get logout page
app.get("/logout.html", (request, response) => {
	response.sendFile(path.join(__dirname, '/logout.html'));
	// response.connection.destroy();

});
app.listen(3000);
console.log(`Server running at http://localhost:3000`);

