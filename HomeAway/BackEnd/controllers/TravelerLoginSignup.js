var kafka = require('../kafka/client');
var passport = require('passport');

const handleLogin = (req, res) => {
  /*  passport.authenticate('login', function (err, user) {
        if (err) {
            res.status(500).send();
        }
        if (!user) {
            res.statusMessage = "Username does not exist. Please double-check and try again.";
            res.status(400).send();
        }
        else {
            req.login(user.username, function (err) {
                if (err) {
                    console.log(err);
                }
                req.session.username = user.username;
                console.log(req);
                console.log("session initilized");
                res.status(200).send({user: user});
            });

        }

    })(req, res);
*/
    kafka.make_request('loginUser_topic', {"username": req.body.username, "password": req.body.password}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else 
        {
                console.log("Results is" , results.code)
                res.cookie('cookie',req.body.username,{maxAge: 9000000, httpOnly: false, path : '/'});
                req.session.user = results;
                console.log("Successfully retrieving User")
                console.log("Username is "+ JSON.stringify(req.body.username))
                res.status(200).send(JSON.stringify(req.body.username));
                res.end("Successful Login");
        }
    })
};

const handleSignUp = (req, res) => {
    kafka.make_request('TRAVELER_SIGNUP_TOPIC', {"username": req.body.username, "password": req.body.password,"firstname" : req.body.firstname, "lastname" : req.body.lastname, "email" : req.body.email}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
                console.log("Results is" , results.code)
                if(results.code === 200) {
                    if (err) {
                        console.log(err);
                    }  
                    res.cookie('cookie',req.body.username,{maxAge: 9000000, httpOnly: false, path : '/'});
                    req.session.username = req.body.username;
                    console.log(req);
                    console.log("session initilized");
                    res.status(200).send(JSON.stringify(req.body.username));
                }
            }
    })
};


module.exports = {
    handleLogin,
    handleSignUp
  }