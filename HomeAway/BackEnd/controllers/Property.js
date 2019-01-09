var kafka = require('../kafka/client');

var Max_ID = -1;



const getMaxProperty = (req, res) => {
    kafka.make_request('MAX_PROPERTY_TOPIC',{}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
            console.log("Results is" , JSON.stringify(results.value[0].Property.prop_id))
                //console.log("Results is" , JSON.stringify(results.value[0].Property[0].prop_id))
                Max_ID = results.value[0].Property.prop_id;
                res.status(200).send(JSON.stringify(results.value[0].Property.prop_id))
                res.end("Successful Retrived Max Property")
            }
    })
};


const postProperty = (req, res) => {
    console.log("Request is ", req.body)
    kafka.make_request('POST_PROPERTY_TOPIC', 
    {
        property : req.body
}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
            console.log("Results is ", results)
            res.status(200).send(JSON.stringify(results))
            res.end("Property Posted Successful")
            }
    })
};

const bookProperty = (req, res) => {
    kafka.make_request('BOOK_PROPERTY_TOPIC', {"property_id" : Number(req.body.property_id),"startdate":req.body.startdate ,"enddate" : req.body.enddate,"username":req.body.username}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
            console.log("Results is ", results)
            res.status(200).send(JSON.stringify(results))
            res.end("Property Booked Successful")
            }
    })
};

const placeDescription = (req, res) => {
    kafka.make_request('PLACE_DESCRIPTION_TOPIC', {"property_id":Number(req.params.id)}, function (err, results) {
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
                res.end("Place Description");
            }
    })
};


module.exports = {
    getMaxProperty,
    postProperty,
    bookProperty,
    placeDescription
  }