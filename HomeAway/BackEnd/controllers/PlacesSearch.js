var kafka = require('../kafka/client');


var placename= '';
var adultlist = 0;
var childlist = 0;
var startdate = '';
var enddate = '';
/*

const setPlacesFilters = (req, res) => {
    placename = req.body.placename;
    adultlist = req.body.adultlist;
    childlist = req.body.childlist;
    startdate = req.body.startdate;
    enddate = req.body.enddate;
    console.log("-------------------------")
    console.log("PLACENAME : ",placename)
    console.log("ADULTLIST : ",adultlist)
    console.log("CHILDLIST : ",childlist)
    console.log("STARTDATE : ",startdate)
    console.log("ENDDATE : ",enddate)

    console.log("-------------------------")
    
     var res1 = {
         "placename" : placename,
         "adultlist" : adultlist,
        "childlist"  : childlist,
         "startdate" : startdate,
         "enddate" : enddate
     }
     res.send({'placename': placename, 'startdate' : startdate ,'enddate' : enddate, 'adultlist' : adultlist, 'childlist' : childlist})
     res.end("Successful");
};*/

const getsearchPlaces = (req, res) => {
    kafka.make_request('GET_PLACES_TOPIC', {"placename": placename, "startdate" : req.body.startdate,"enddate" : req.body.enddate, "maxadults":Number(adultlist), "maxchild":Number(childlist)}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
            console.log("Results is" , results.code)
            console.log("Result is  "+ JSON.stringify(results.value))
            res.status(200).send(JSON.stringify(results.value));
            res.end("Successful");
            }
    })
};

const setsearchPlaces = (req, res) => {
    placename = req.body.placename
    startdate =  req.body.startdate
    enddate =  req.body.enddate 
    adultlist =  req.body.adultlist
    childlist =  req.body.childlist
    kafka.make_request('SET_PLACES_TOPIC', {"placename": req.body.placename, "startdate" : req.body.startdate,"enddate" : req.body.enddate, "maxadults":Number(req.body.adultlist), "maxchild":Number(req.body.childlist)}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
                console.log("Results is" , results.code)
                console.log("Result is  "+ JSON.stringify(results.value))
                res.status(200).send(JSON.stringify(results.value));
                res.end("Successful");
            }
    })
};

const setsearchPlaceswithFilters = (req, res) => {
    kafka.make_request('SET_PLACES_FILTER_TOPIC', {"username": req.body.username, "password": req.body.password}, function (err, results) {
        console.log('in result');
        if (err) {
            res.writeHead(400,{
                'Content-Type' : 'text/plain'
            })
            res.end("Invalid Credentials");
        }
        else {
                console.log("Results is" , results.code)
                res.cookie('cookie',req.body.username,{maxAge: 9000000, httpOnly: false, path : '/'});
                req.session.user = results;
                console.log("Successfully retrieving User")
                console.log("Username is "+ JSON.stringify(req.body.username))
                res.status(200).send(JSON.stringify(req.body.username));
                res.end("Successful Login");
            }
    })
};

module.exports = {
    //setPlacesFilters,
    getsearchPlaces,
    setsearchPlaces,
    setsearchPlaceswithFilters
  }


  
  
