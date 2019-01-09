var mongo = require("./mongo");
var mongoURL = "mongodb://localhost:27017/HomeAway";
var bcrypt = require('bcrypt');

function handle_request(msg, callback) {

    var res = {};
    console.log("In handle request:" + JSON.stringify(msg));
    var username = msg.username;
    var password = msg.password;
    mongo.myconnect(mongoURL, function () {
        console.log('Connected to mongo at: ' + mongoURL);
        var coll = mongo.collection('HomeAway');
       // console.log("Collection is -", coll)
       // coll.findOne({ Users : {  $elemMatch: { username: "vatsa"} } })
       // coll.find({'Users.username':"Srinivas",'Users.password':"Srinivas"}, function (err, user) {
       //  coll.findOne({'Users.username':username,'Users.password':password}, function (err, user) {
       // coll.findOne({ Users { username: "Srinivas"} } },function (err, user) {
       // coll.find({Property: {  $elemMatch: { city: "San Jose"} }}).toArray(function(err, user){
       // coll.find({"Property.city" : "San Jose"}, { _id: 0,Property: {$elemMatch: {city: "San Jose"}}}).toArray(function(err, user){
        coll.findOne({'Users.username': username}, function (err, user) {
            //console.log(user)
            if (user) {
                bcrypt.compare(password,user.Users.password, function(err, answer) {
                    if(answer)
                    {
                        console.log("-----------------------------------")
                       // console.log("RESULT IS - ",user)
                        res.code = "200";
                        res.value = user;
                    }
                    else
                    {
                        console.log("FAIL OF BCRYPT", user)
                        res.code = "400";
                        res.value = "Failed Login";
                        console.log(res.value);
                    }
                })
            } else {
                console.log("FAIL OF TOP QUERY", user)
                res.code = "400";
                res.value = "Failed Login";
                console.log(res.value);
            }
            console.log("inside try:" + res);
            callback(null, res);
        });
    })

}

exports.handle_request = handle_request;