var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var bcrypt = require('bcrypt');
var saltRounds = 10;
var HomeAway = require("../model/HomeAway")

function handle_request(msg, callback) {

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
        bcrypt.hash(msg.password, saltRounds, function(err, hash) {
            password = hash;
            var SignUp = new HomeAway({
                Users :{
            username :msg.username,
            password : password,
            firstname : msg.firstname,
            lastname : msg.lastname,
            email : msg.email,
            traveler : 1
            }
            })
            var promise = SignUp.save();
            promise
      .then(function() {
        res.value = msg;
        res.code = 200;
        callback(null, res);
      })
      .catch(function(err) {
        console.log("error:", err.message);
        if (err.message.includes("username_1 dup key:"))
          res.value = "This username already exists!";
        else res.value = "Error in registering data please try again!";
        res.code = "400";
        callback(null, res);
      });
  });

}

exports.handle_request = handle_request;