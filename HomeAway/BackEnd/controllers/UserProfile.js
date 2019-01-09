var kafka = require('../kafka/client');

const getUserDetails = (req, res) => {
    kafka.make_request('USER_DETAILS_TOPIC', {"username" : req.params.id}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
            console.log("Results is" , results.code)
            res.status(200).send(JSON.stringify(results.value));
            console.log("Results is" , JSON.stringify(results.value))
            res.end("Successful Update");
            }
    })
};

const updateUserDetails = (req, res) => {
    kafka.make_request('UPDATE_USER_DETAILS_TOPIC', {"username" : req.params.id,"school" : req.body.school,
    "contact" : req.body.contact,
    "aboutme" : req.body.aboutme,
    "company" : req.body.company,
    "hometown" : req.body.hometown,
    "language" : req.body.language,
    "gender" : req.body.gender,
    "state" : req.body.state,
    "country" : req.body.country,
    "address" : req.body.address}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Update Failed");
        }
        else {
                console.log("Results is" , results.code)
                res.status(200).send(JSON.stringify(results.value));
                console.log("Results is" , JSON.stringify(results.value))
                res.end("Successful Update");
            }
    })
};


module.exports = {
    getUserDetails,
    updateUserDetails
  }