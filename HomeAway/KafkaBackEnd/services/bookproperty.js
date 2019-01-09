var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('HomeAway');
        console.log("Property_ID is : " + msg.property_id)
        var booking_startdate = msg.enddate;
        var booking_enddate = msg.startdate;
        var booking_username = msg.username;
        coll.findOne(
            {"Property.prop_id" : msg.property_id},
            {_id: 0,Property: {$elemMatch: {prop_id: msg.property_id}}}
            ,function(findErr, result){
                        console.log("Query Output", result)
                        if (findErr) { 
                            res.code = "400";
                            res.value = "Failed Login";
                            console.log(res.value);
                            throw findErr;
                        }//if
                        else
                            {
                                var PropertyDescription = result.Property[0];
                                coll.findOneAndUpdate({'Users.username':booking_username},{ "$push": { "Bookings":   {
                                    Property : PropertyDescription,
                                    "booking_startdate" : booking_startdate,
                                    "booking_enddate" : booking_enddate,
                                    "booking_username" : booking_username
                                }}},function(findErr, results){
                                                if(findErr)
                                                {
                                                    res.code = "400";
                                                    res.value = "Failed Login";
                                                    console.log(res.value);
                                                    throw findErr;
                                                }
                                                else{
                                                        console.log("-----------------------------------")                  
                                                        console.log("RESULT IS - ",JSON.stringify(results))
                                                        res.code ="200";
                                                        res.value = results;
                                                        console.log("inside try:" + res);
                                                        callback(null, res) 
                                                }//else
                                            })//func
                            }
                        })
                    })
}

exports.handle_request = handle_request;
