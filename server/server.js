const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
var fs = require('fs');

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function(req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//Setting up server
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});









//tesing api
app.get('/api/user', (req, res) => {
        res.status(200).send([
            {
                "id": 1,
                "LastName": "Gudigenavar",
                "FirstName": "Shamant",
                "Address": "Jamkhandi",
                "City": "JKD",
                "status" : 1
            },
            {
                "id": 2,
                "LastName": "P",
                "FirstName": "Rakesh",
                "Address": "Bengaluru",
                "City": "Bengaluru",
                "status" : 1
            },
            {
                "id": 3,
                "LastName": "Rathod",
                "FirstName": "Mohan",
                "Address": "RV Road",
                "City": "JKD",
                "status" : 2
            },
            {
                "id": 4,
                "LastName": "Rai",
                "FirstName": "Bhimaray",
                "Address": "MG Road",
                "City": "Bengaluru",
                "status" : 1
            },
            {
                "id": 5,
                "LastName": "Mohammad",
                "FirstName": "Santosh",
                "Address": "KHB clony",
                "City": "JKD",
                "status" : 1
            },
            {
                "id": 6,
                "LastName": "Desai",
                "FirstName": "Manoj",
                "Address": "Siddarth Nagar",
                "City": "Bengaluru",
                "status" : 0
            },
            {
                "id": 7,
                "LastName": "Pai",
                "FirstName": "Akshay",
                "Address": "Hemant appartment",
                "City": "JKD",
                "status" : 2
            },
            {
                "id": 8,
                "LastName": "Birla",
                "FirstName": "Geeta",
                "Address": "Ghandi Chouk",
                "City": "Bengaluru",
                "status" : 1
            },
            {
                "id": 9,
                "LastName": "Sharma",
                "FirstName": "Rani",
                "Address": "Hanuman Nagar",
                "City": "JKD",
                "status" : 0
            },
            {
                "id": 10,
                "LastName": "Ravat",
                "FirstName": "Sandesh",
                "Address": "BTM Layout",
                "City": "Bengaluru",
                "status" : 2
            },
            {
                "id": 11,
                "LastName": "Hegde",
                "FirstName": "Divesh",
                "Address": "Rajajinagar",
                "City": "JKD",
                "status" : 0
            },
            {
                "id": 12,
                "LastName": "Kattiker",
                "FirstName": "Prakash",
                "Address": "Indira Nagar",
                "City": "Bengaluru",
                "status" : 0
            }
        ]);
});
