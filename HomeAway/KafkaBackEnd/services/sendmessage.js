var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
    console.log("Camer here")
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        console.log("Message is ", msg)
        var coll = mongo.collection('HomeAway');
        coll.findOneAndUpdate({'Users.username':msg.username},{ "$push": { "Messages": { "id": new Date(),"prop_id" : Number(msg.prop_id),"traveler" : msg.username, "message" : msg.message, "owner" : msg.owner}}},{new:true},function(findErr, results){
                                if(findErr)
                                {
                                    res.code = "400";
                                    res.value = "Failed Login";
                                    console.log(res.value);
                                    throw findErr;
                                }
                                else{
                                        console.log("-----------------------------------")                  
                                        console.log("RESULT IS - ",JSON.stringify(results.value))
                                        res.code ="200";
                                        res.value = results.value;
                                        console.log("inside try:" + res);
                                        callback(null, res) 
                                }//else
                            })//func
        })
}

exports.handle_request = handle_request;
