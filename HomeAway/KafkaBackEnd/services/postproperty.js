var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        console.log("Message is ", msg)
        var coll = mongo.collection('HomeAway');
               var NewProperty = {
              /*  "prop_id" : msg.prop_id,
                "name" : msg.name,
                "type" : msg.type,
                "bed" : msg.bed,
                "bath" : msg.bath,
                "startdate" : msg.startdate,
                "enddate" : msg.enddate,
                "currencytype" : msg.currencytype,
                "rate" : msg.rate,
                "minstay" : msg.minstay,
                "maxadults" : msg.maxadults,
                "maxchild" : msg.maxchild,
                "description" : msg.description,
                "unit" : msg.unit,
                "city" : msg.city,
                "state" : msg.state,
                "zip" : msg.zip,
                "country" : msg.country,
                "address" : msg.address,
                "username" : msg.username*/
                "prop_id" : msg.property.prop_id,
                "name" : msg.property.name,
                "type" : msg.property.type,
                "bed" : msg.property.bed,
                "bath" : msg.property.bath,
                "startdate" : msg.property.startdate,
                "enddate" : msg.property.enddate,
                "currencytype" : msg.property.currencytype,
                "rate" : msg.property.rate,
                "minstay" : msg.property.minstay,
                "maxadults" : msg.property.maxadults,
                "maxchild" : msg.property.maxchild,
                "description" : msg.property.description,
                "unit" : msg.property.unit,
                "city" : msg.property.city,
                "state" : msg.property.state,
                "zip" : msg.property.zip,
                "country" : msg.property.country,
                "address" : msg.property.address,
                "username" : msg.property.username
               }
               console.log("NewProp is" , NewProperty)

                coll.findOneAndUpdate({'Users.username':msg.property.username},
                { "$push": { "Property":  NewProperty }},function(findErr, results){
                                if(findErr)
                                {
                                    res.code = "400";
                                    res.value = "Failed Login";
                                    console.log(res.value);
                                    throw findErr;
                                    callback(null, res) 
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
        })
}

exports.handle_request = handle_request;
