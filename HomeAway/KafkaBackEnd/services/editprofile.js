var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";

var HomeAway = require('../model/HomeAway');

function handle_request(msg,callback) {
    var res = {};
        var username =  msg.username;
        // var school= msg.school;
        // var contact = msg.contact;
        // var aboutme = msg.aboutme;
        // var company = msg.company;
        // var hometown = msg.hometown;
        // var language = msg.language;
        // var gender = msg.gender;
        // var state = msg.state;
        // var country = msg.country;
        // var address = msg.address;
        
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('HomeAway');
       console.log("Message is", username)
       coll.findOneAndUpdate({'Users.username':msg.username},{ "$set": { "Users.school" : msg.school,
       "Users.contact" : msg.contact,
       "Users.aboutme" : msg.aboutme,
       "Users.company" : msg.company,
       "Users.hometown" : msg.hometown,
       "Users.language" : msg.language,
       "Users.gender" : msg.gender,
       "Users.state" : msg.state,
       "Users.country" : msg.country,
       "Users.address" : msg.address}},{new: true},function(findErr, resultone){
              console.log("Query Output", JSON.stringify(resultone))
                if (findErr) { 
                    res.code = "400";
                    res.value = "Failed Login";
                    console.log(res.value);
                    throw findErr;
                }//if
                else
                  {
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
                          }
                          console.log("inside try:" + res);
                          callback(null, res) 
                      })
                   
                  }  
               
        })
    })
}

exports.handle_request = handle_request;