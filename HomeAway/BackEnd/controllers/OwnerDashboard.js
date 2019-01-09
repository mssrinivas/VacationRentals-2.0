var kafka = require('../kafka/client');

const latestPostings = (req, res) => {
    kafka.make_request('LATEST_POSTINGS_TOPIC',  {"username": req.params.id}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
                console.log("Results is" , results.code)
                console.log("----------------------------")
                res.status(200).send(JSON.stringify(results.value));
                console.log("----------------------------")
            }
    })
};


//allProperties
const allProperties = (req, res) => {
    kafka.make_request('ALL_POSTINGS_TOPIC', {"username": req.params.id}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");ç
        }
        else {
            console.log("Results is" , results.code)
            console.log("----------------------------")
            res.status(200).send(JSON.stringify(results.value));
            console.log("----------------------------")
            }
    })
};


module.exports = {
    latestPostings,
    allProperties
  }