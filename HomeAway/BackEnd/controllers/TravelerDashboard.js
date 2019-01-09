var kafka = require('../kafka/client');

const latestBookings = (req, res) => {
    kafka.make_request('LATEST_BOOKINGS_TOPIC', {"username": req.params.id}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
                console.log("Results is" , results.code)
              //  res.cookie('cookie',req.body.username,{maxAge: 9000000, httpOnly: false, path : '/'});
              //  req.session.user = results;
              //  console.log("Successfully retrieving User")
              //  console.log("Username is "+ JSON.stringify(req.body.username))
                res.status(200).send(JSON.stringify(results.value));
              //  res.end("Successful Login");
            }
    })
};

module.exports = {
    latestBookings
  }