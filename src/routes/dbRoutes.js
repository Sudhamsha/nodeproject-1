var express = require("express");
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var events = [{
    id: 1,
    name : 'Event Name 1',
    description: 'Event Description',
    date: '2017-07-09',
    time: '9:00',
    duration: '1 hour',
    location: {
        streetAdress: "something",
        city: "Los Angeles",
        state: "LA"
    },
    capacity: 200
},{
    id: 2,
    name : 'Event Name 2',
    description: 'Event Description',
    date: '2017-07-09',
    time: '9:00',
    duration: '1 hour',
    location: {
        streetAdress: "something",
        city: "Los Angeles",
        state: "LA"
    },
    capacity: 200
},{
    id: 3,
    name : 'Event Name 3',
    description: 'Event Description',
    date: '2017-07-09',
    time: '9:00',
    duration: '1 hour',
    location: {
        streetAdress: "something",
        city: "Los Angeles",
        state: "LA"
    },
    capacity: 200
},{
    id: 4,
    name : 'Event Name 4',
    description: 'Event Description',
    date: '2017-07-09',
    time: '9:00',
    duration: '1 hour',
    location: {
        streetAdress: "something",
        city: "Los Angeles",
        state: "LA"
    },
    capacity: 200
}];

dbRouter.route('/addEventData')
.get(function(req, res){
   var url = 'mongodb://localhost:27017/eventsApp';
   
   mongodb.connect(url, function(err, db){
       var collection = db.collection('events');
       collection.insertMany(events, function(err, results){
           res.send(results);
           db.close();
       });
   });
});

module.exports = dbRouter;