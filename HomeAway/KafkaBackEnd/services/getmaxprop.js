var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";

var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('HomeAway');
        coll.aggregate([
          { $unwind: '$Property'},
          {
          $sort: {
                  "Property.prop_id":1
                 }
           } ,
          { $limit : 1 }
      ]).toArray(function(findErr, result){
              console.log("Query Output", JSON.stringify(result))
                if (findErr) { 
                    res.code = "400";
                    res.value = "Failed Login";
                    console.log(res.value);
                    throw findErr;
                }//if
                else
                  {
                    console.log("-----------------------------------")                  
                    console.log("RESULT IS - ",JSON.stringify(result))
                    res.code ="200";
                    res.value = result;
                  }     
            console.log("inside try:" + res);
            callback(null, res)
         })
    })
}

exports.handle_request = handle_request;