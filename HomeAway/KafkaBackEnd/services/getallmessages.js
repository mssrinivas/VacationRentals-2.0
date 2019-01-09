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
        coll.aggregate([
            { $unwind: '$Messages' },
            { $match: {
                'Messages.prop_id': msg.prop_id,
                'Messages.traveler':msg.username
            }},
            { $sort : {"Messages.id" : 1}},
            { $group: { "_id" : "$Messages.prop_id", "Messages": {$push: "$Messages"}}},
            { $project: {_id: 0, "Messages": 1}}
        ]).toArray(function(findErr, result){
                                if(findErr)
                                {
                                    res.code = "400";
                                    res.value = "Failed Login";
                                    console.log(res.value);
                                    throw findErr;
                                }
                                else
                                {
                                        console.log("-----------------------------------")                  
                                        console.log("RESULT IS - ",JSON.stringify(result))
                                        res.code ="200";
                                        res.value = result;
                                        console.log("inside try:" + res);
                                        callback(null, res) 
                                }//else
                            })//func
        })
}

exports.handle_request = handle_request;
