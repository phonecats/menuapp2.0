	
////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////
//Express App that loads ReactJS UI and handles all back-end server logic.
//Author: Oscar Chavez @ 2017
//Backend main.js
///////////////////////////////////////////


///////////////////////////////////////////
//////////////Variables///////////////////////
///////////////////////////////////////////
var listeningPort = process.argv[2];

///////////////////////////////////////////
//////////////Modules///////////////////////
///////////////////////////////////////////
var express = require('express');
var app = express();
var bodyparser = require('body-parser')



///////////////////////////////////////////
//////////////Middle-ware//////////////////
///////////////////////////////////////////

//make the 'public' directory and all its contents accessible by /*Doc Name*
app.use(express.static( 'public'));
//able to process POSTed URL's in json obj ex: request.body <-JSON object.
app.use(bodyparser.urlencoded({extended: false}))

//for_userInfo is url needed to be called by html react function
app.post('/form_userInfo', function(req, res){
	console.log("Order Received");
	console.log(req.body.firstName);
	res.send(req.body);
});

app.post('/json', function(req,res){
	console.log('json post')


	res.send(req.body);
});

//App begin listening
//App initialization
app.listen(listeningPort || 3000);



//Output to console
var consoleLog = {
	"ExpressApp ": "Reporting For Duty",
	"Listening on Port: ": 3000,
}
console.log(consoleLog)
///////////////////////////////////////////////////////////////////