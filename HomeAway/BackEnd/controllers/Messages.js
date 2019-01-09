var kafka = require('../kafka/client');

const sendMessage = (req, res) => {
    console.log("REQUEST CAME HERE", req.body)
    kafka.make_request('SEND_MESSAGE_TOPIC', {"username": req.body.username,"prop_id":req.body.property_id,"message" : req.body.message, "owner" : req.body.ownername}, function (err, results) {
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
const getAllMessages = (req, res) => {
    kafka.make_request('GET_ALL_MESSAGES_TOPIC',{"username":req.body.username,"prop_id": req.body.prop_id}, function (err, results) {
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


//allProperties
const getAllMessagesOwner = (req, res) => {
    kafka.make_request('GET_ALL_MESSAGES_OWNER_TOPIC',{"username":req.body.username}, function (err, results) {
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

//allProperties
const inbox = (req, res) => {
    kafka.make_request('INBOX_TOPIC',{"username":req.body.username}, function (err, results) {
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


//allProperties
const inboxOwner = (req, res) => {
    kafka.make_request('INBOX_OWNER_TOPIC',{"username":req.body.username}, function (err, results) {
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
    sendMessage,
    getAllMessages,
    getAllMessagesOwner,
    inbox,
    inboxOwner
  }