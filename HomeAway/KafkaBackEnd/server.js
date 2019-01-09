var connection = require('./kafka/Connection');
var mongoose = require('./mongoose');
var login = require('./services/login');
var signup = require('./services/signup');
var ownerlogin = require('./services/ownerlogin');
var ownersignup = require('./services/ownersignup');
var getmaxprop = require('./services/getmaxprop');
var editprofile = require('./services/editprofile');
var ownerpostings = require('./services/latestpostings');
var propertydescription = require('./services/propertydescription');
var allproperties = require('./services/ownerdashboard');
var getuserprofile = require('./services/userprofile');
var bookproperty = require('./services/bookproperty');
var postproperty = require('./services/postproperty')
var latestbookings = require('./services/tripsboard')
var getallmessages = require('./services/getallmessages');
var sendmessage = require('./services/sendmessage');
var getallmessagesowner = require('./services/getallmessagesowner');
var inbox = require('./services/inbox');
var inboxowner = require('./services/inboxowner');
var getplaces = require('./services/getplaces');
var postplaces = require('./services/searchplaces');


var consumer_login = connection.getConsumer('loginUser_topic');
var consumer_signup = connection.getConsumer('TRAVELER_SIGNUP_TOPIC');
var consumer_owner_login = connection.getConsumer('OWNER_LOGIN_TOPIC');
var consumer_owner_signup = connection.getConsumer('OWNER_SIGNUP_TOPIC');
var consumer_getmaxprop = connection.getConsumer('MAX_PROPERTY_TOPIC');
var consumer_editprofile = connection.getConsumer('UPDATE_USER_DETAILS_TOPIC');
var consumer_ownerpostings = connection.getConsumer('LATEST_POSTINGS_TOPIC');
var consumer_propertydescription = connection.getConsumer('PLACE_DESCRIPTION_TOPIC');
var consumer_allproperties = connection.getConsumer('ALL_POSTINGS_TOPIC');
var consumer_getuserprofile = connection.getConsumer('USER_DETAILS_TOPIC');
var consumer_bookproperty = connection.getConsumer('BOOK_PROPERTY_TOPIC');
var consumer_postproperty = connection.getConsumer('POST_PROPERTY_TOPIC');
var consumer_latestbookings = connection.getConsumer('LATEST_BOOKINGS_TOPIC');
var consumer_getallmessages = connection.getConsumer('GET_ALL_MESSAGES_TOPIC');
var consumer_sendmessage = connection.getConsumer('SEND_MESSAGE_TOPIC');
var consumer_getallmessagesowner = connection.getConsumer('GET_ALL_MESSAGES_OWNER_TOPIC');
var consumer_inbox = connection.getConsumer('INBOX_TOPIC');
var consumer_inboxowner = connection.getConsumer('INBOX_OWNER_TOPIC');
var consumer_getplaces = connection.getConsumer('GET_PLACES_TOPIC');
var consumer_postplaces = connection.getConsumer('SET_PLACES_TOPIC')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection Successful!");
});
var producer = connection.getProducer();

consumer_login.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    login.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log(data);
        });
        return;
    });
});


consumer_signup.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    signup.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Signed Up");
            console.log( payloads);
            console.log(data);
        });
        return;
    });
});

consumer_owner_login.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    ownerlogin.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log(data);
        });
        return;
    });
});

consumer_owner_signup.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    ownersignup.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Signed Up");
            console.log( payloads);
            console.log(data);
        });
        return;
    });
});


consumer_getmaxprop.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getmaxprop.handle_request(data.data,function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Signed Up");
            console.log( payloads);
            console.log("DATA is ", data);
        });
        return;
    });
});


consumer_editprofile.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    editprofile.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});


consumer_ownerpostings.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    ownerpostings.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_propertydescription.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    propertydescription.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});


consumer_allproperties.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    allproperties.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_getuserprofile.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getuserprofile.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_bookproperty.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    bookproperty.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});


consumer_postproperty.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    postproperty.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});


consumer_latestbookings.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    latestbookings.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});



consumer_sendmessage.on('message', function (message) {
    console.log("Came here")
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    sendmessage.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_getallmessages.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getallmessages.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_getallmessagesowner.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getallmessagesowner.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_inbox.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    inbox.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});



consumer_inboxowner.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    inboxowner.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});



consumer_getplaces.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getplaces.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});

consumer_getplaces.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    getplaces.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});



consumer_postplaces.on('message', function (message) {
    console.log('message received');
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);
    postplaces.handle_request(data.data, function (err, res) {
        console.log('after handle' + res);
        var payloads = [
            {
                topic: data.replyTo,
                messages: JSON.stringify({
                    correlationId: data.correlationId,
                    data: res
                }),
                partition: 0
            }
        ];
        producer.send(payloads, function (err, data) {
            console.log("Logged In");
            console.log( payloads);
            console.log("DATA IS", data);
        });
        return;
    });
});