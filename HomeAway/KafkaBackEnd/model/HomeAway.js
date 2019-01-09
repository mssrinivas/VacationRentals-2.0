const  mongoose     = require('../mongoose');

const  Schema       = mongoose.Schema;

var User = new Schema({
    username: { type: String, trim: true},
    email: { type: String, trim: true },
    password: { type: String, trim: true },
    firstname: { type: String, trim: true, default: "" },
    lastname: { type: String, trim: true, default: "" },
    school: { type: String, trim: true, default: "" },
    contact: { type: String, trim: true, default: "" },
    aboutme: { type: String, trim: true, default: "" },
    company: { type: String, trim: true, default: "" },
    hometown: { type: String, trim: true, default: "" },
    language: { type: String, trim: true, default: "" },
    gender: { type: String, trim: true, default: "" },
    traveler: { type: Boolean, trim: true, default: 0 },
    owner: { type: Boolean, trim: true, default: 0 },
    state: { type: String, trim: true, default: "" },
    country:{ type: String, trim: true, default: "" },
    address:{ type: String, trim: true, default: "" }
})

var PropertyBookings =  new Schema({
    prop_id: { type: Number, trim: true },
    booking_username: { type: String, trim: true },
    booking_startdate: { type: String, trim: true, default: "" },
    booking_enddate: { type: String, trim: true, default: "" }
});

var Messages = new Schema({
    prop_id: { type: Number, trim: true },
    id : {type : Date} ,
    messages : { type: String, trim: true},
    traveler : {type: String, trim: true},
    owner : {type: String, trim: true}
})

/*var PropertyPostings =  new Schema({
    prop_id: { type: Number, trim: true, index: { unique: true } },
    username: { type: String, trim: true, index: { unique: true } },
    startdate: { type: String, trim: true, default: "" },
    enddate: { type: String, trim: true, default: "" }
});*/

var Property = new Schema({
    prop_id: { type: Number, trim: true },
    name: { type: String, trim: true},
    type: { type: String,trim : true },
    location: { type: String, trim: true, default: "" },
    bed: { type: Number, trim: true, default: 0 },
    bath: { type: Number, trim: true, default: 0 },
    startdate: { type: Date, trim: true, default: "" },
    enddate: { type: Date, trim: true, default: "" },
    currencytype: { type: String, trim: true, default: "" },
    rate: { type: Number, trim: true, default: "" },
    minstay: { type: Number, trim: true, default: 1 },
    maxadults: { type: Number, trim: true, default: 0 },
    maxchild: { type: Number, trim: true, default: 0 },
    description: { type: String, trim: true, default: "" },
    unit:{ type: String, trim: true, default: "" },
    city:{ type: String, trim: true, default: "" },
    state:{ type: String, trim: true, default: "" },
    zip : { type: String, trim: true, default: "" },
    country : { type: String, trim: true, default: "" },
    address : { type: String, trim: true, default: "" }
})

var HomeAwaySchema = new Schema({
    Users : {type : User},
    Property : [{type: Property}],
    Bookings : [{type:PropertyBookings}],
    Messages : [{type : Messages}]
});

let HomeAway = mongoose.model('HomeAwaySchema', HomeAwaySchema,'HomeAway');
module.exports =  HomeAway;


/*

{
    "_id" : ObjectId("5bce97fed22c5281d41ba49d"),
    "Users" : 
        {
            username: "Srinivas",
            email: "srinivas@gmail.com",
            password: "Srinivas",
            firstname: "Mudambi",
            lastname: "Srinivas",
            school: "San Jose State University",
            contact: "9620023077",
            aboutme: "Hey! This is Srinivas",
            company: "Adobe",
            hometown: "San Jose",
            language: "English",
            gender: "Male",
            traveler: 1,
            owner: 0,
            state: "California",
            country:"USA",
            address:"One South Market Apartment"
        },
      "Property" : 
       [{
            prop_id: 1,
            name: "101 San Fernando",
            type: "Apartment",
            location: "San Jose Community Center",
            bed: 2,
            bath: 2,
            startdate: "2018-12-06",
            enddate: "2018-12-15",
            currencytype:"USD",
            rate: 500,
            minstay: 1,
            maxadults: 5,
            maxchild: 5,
            description: "Stay at your own risk",
            unit:"#501",
            city:"San Jose",
            state: "California",
            zip : "95113",
            country : "USA",
            address : "One St Market Street, Opp MLK"
       }],
       "Bookings" :
       [{
            prop_id: 2,
            startdate: "2018-12-04",
            enddate: "2018-12-14"
       },
       {
            prop_id: 4,
            startdate: "2018-11-11",
            enddate: "2018-11-21"
       }],
       "Postings" :
       [{
            prop_id: 1,
            startdate: "2018-12-06",
            enddate: "2018-12-15"   
       }]
   
       
}

*/