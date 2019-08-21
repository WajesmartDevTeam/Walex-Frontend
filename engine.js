var express = require("express");
const app = express();
var fs = require("fs");
//var https = require('https')
var http = require("http");
var axios = require("axios");

//Read SSL Keys
// var privateKey = fs.readFileSync('pizzajungle.website.key').toString()
// var certificate = fs.readFileSync('pizzajungle_website.crt').toString()
// var ca = fs.readFileSync('pizzajungle_website.ca').toString()

//Create server
// var server = https.createServer({
//     key: privateKey,
//     cert: certificate,
//     requestCert: false,
//     rejectUnauthorized: false
// }, app);

var server = http.Server(app);
//Listen
server.listen(3300, function() {
  console.log("Listening on *:3300");
});

var io = require("socket.io").listen(server);

const URL = "http://199.192.22.132";

io.on("connection", function(socket) {
  socket.on("makeGetRequest", function(request) {
    var request_urls = {
      user: "/user/"
    };

    if (request.params !== undefined) {
      var obj = request.params;

      var request_url = URL + request_urls[request.what] + "" + obj;
    } else {
      var request_url = URL + request_urls[request.what];
    }

    if (request.headers !== undefined) {
      var config = {
        headers: request.headers
      };
    }

    console.log("Sending get request to: " + request_url);

    axios
      .get(request_url, config)
      .then(response => {
        console.log(response.data.status);
        if (
          response.data.status == "true" ||
          response.data.status == "True" ||
          response.data.status == true
        ) {
          var response = {
            data: response.data,
            type: request.what,
            status: "true"
          };

          socket.emit("makeGetRequestResponse", response);
        } else {
          socket.emit("makeGetRequestResponse", response.data);
        }
      })
      .catch(err => {
        //try {
        if (
          err.response.data.detail !== undefined &&
          err.response.data.detail == "Given token not valid for any token type"
        ) {
          socket.emit("tokenExpired", "Token Expired");
          console.log("Token expired.");
        } else {
          socket.emit("makeGetRequestResponse", err.response);
        }
        // } catch(e) {
        // 	console.log(e)
        // 	socket.emit('makeGetRequestResponse', e)
        // }
        //console.log(err)
      });
  });

  socket.on("makePostRequest", function(request) {
    var request_urls = {
      signup: "/auth/registration/",
      login: "/auth/login/",
      logout: "/auth/logout/"
    };

    var request_url = URL + request_urls[request.what];

    if (request.headers !== undefined) {
      var config = {
        headers: request.headers
      };
    }

    console.log("Sending post request to: " + request_url);
    axios
      .post(request_url, request.data, config)
      .then(response => {
        if (
          response.data.status == "true" ||
          response.data.status == "True" ||
          response.data.status == true
        ) {
          response = {
            data: response.data,
            type: request.what,
            status: response.data.status
          };
          socket.emit("makePostRequestResponse", response);
        } else {
          socket.emit("makePostRequestResponse", response.data[0]);
        }
      })
      .catch(err => {
        console.log(err.response);
        socket.emit("makePostRequestResponse", "error");
      });
  });
});
