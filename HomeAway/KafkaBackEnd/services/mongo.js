var MongoClient = require('mongodb').MongoClient;
var db;

/**
 * Connects to the MongoDB Database with the provided URL
 */

exports.myconnect = function(url, callback){
    if(db)
    {
        callback(db);
    }
    else {
        MongoClient.connect(url, function (err, _db) {
            if (err) {
                throw new Error('Could not connect: ' + err);
            }
            db = _db;
            connected = true;
            console.log(connected + " is connected?");
            callback(db);
        });
    }
};

/**
 * Returns the collection on the selected database
 */
exports.collection = function(name){
    if (!connected) {
      throw new Error('Must connect to Mongo before calling "collection"');
    } 
    return db.collection(name);
};