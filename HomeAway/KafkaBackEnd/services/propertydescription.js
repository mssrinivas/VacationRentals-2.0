var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";

var HomeAway = require('../model/HomeAway');
function handle_request(msg,callback) {
    var res = {};
        console.log("Value is  :" , msg.property_id)
        HomeAway.findOne(
            {"Property.prop_id" : msg.property_id},
            {_id: 0,Property: {$elemMatch: {prop_id: 1}}}
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
                            console.log("-----------------------------------")                  
                            console.log("RESULT IS - ",result.Property[0])
                            res.code ="200";
                            res.value = result;
                            }     
                    console.log("inside try:" + res);
                    callback(null, res)
                    })
}
exports.handle_request = handle_request;