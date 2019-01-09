var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;


var kafka = require('../kafka/client');

module.exports = passport.use('login', new LocalStrategy(function (username, password, done) {
    console.log('in password',password);
    console.log('in username',username);
    kafka.make_request('loginUser_topic', {"username": username, "password": password}, function (err, results) {
    console.log('in result', results);
    if (err) {
        done(err, {});
    }
    else 
    { 
        console.log("Results are", results.code)
        if (results.code == 200) {
        done(null, {username: username, password: password});
         }
        else {
        done(null, false);
          }
    }
})
}))

/*

module.exports = passport.use('signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
function (req, username, password, done) {
    console.log("Inside Signup");


    kafka.make_request('signup_topic', {
        "username": username,
        "password": password,
        "name": req.body.Name,
        "email": req.body.Email,
        "looking_for": req.body.looking_for
    }, function (err, results) {
        console.log('in result');
        console.log(results);
        if (err) {
            done(err, {});
        }
        else {
            if (results.code == 200) {

                done(null, true,results);
            }
            else {
                done(null, false,results);
            }
        }
    });
}));

*/

