var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('HomeAway');
        console.log("Username : " + msg.username)
        coll.findOne({'Users.username':msg.username},{Users:1,_id:0},function(findErr, resulttwo){
                          if(findErr)
                          {
                            res.code = "400";
                            res.value = "Failed Login";
                            console.log(res.value);
                            throw findErr;
                          }
                          else{

                                console.log("-----------------------------------")                  
                                console.log("RESULT IS - ",JSON.stringify(resulttwo))
                                res.code ="200";
                                res.value = resulttwo;
                                console.log("inside try:" + res);
                                callback(null, res) 
                          }
                      })
               
        })
}

exports.handle_request = handle_request;