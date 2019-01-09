var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var HomeAway = require('../model/HomeAway');
function handle_request(msg,callback) {
    var res = {};
        console.log("Value is  :" , msg.placename)
        mongo.myconnect(mongoURL, function () {
            console.log('Connected to mongo at: ' + mongoURL);
            console.log("Message is ", msg)
            var coll = mongo.collection('HomeAway');
            coll.aggregate([
                { 
                    $unwind: '$Property'
                },
                {
                $match: 
                    {
                        $and:[
                            {"Property.city":msg.placename},
                            {"Property.maxadults" : { $gte : msg.maxadults}},
                            {"Property.maxchild"  : { $gte : msg.maxchild}},
                            {"Property.startdate" : { $lte : msg.startdate}},
                            {"Property.enddate" : { $gte : msg.enddate}}
                           ]
                    }
                },
            {
                $project :
                {
                    Property : "$Property",
                    _id:0
                }
            }
           ]).toArray(function(findErr, result){
                        console.log("Query Output", JSON.stringify(result))
                        if (findErr) { 
                            res.code = "400";
                            res.value = "Failed Login";
                            console.log(res.value);
                            console.log("inside try:" + res);
                            callback(null, res)
                            throw findErr;  
                        }//if
                        else
                            {
                            console.log("-----------------------------------")                  
                            console.log("RESULT IS - ",result)
                            res.code ="200";
                            res.value = result;
                            console.log("inside try:" + res);
                            callback(null, res)
                            }     
                    }//toarr
                )
                })
}
exports.handle_request = handle_request;


