var express = require("express");
var eventRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/eventsApp';
var ObjectId = require('mongodb').ObjectId; 

var navItems =[
            {href: 'services', label: 'Services'},
            {href: 'portfolio', label:  'Portfolio'},
            {href: 'about', label:  'About'},
            {href: 'team', label:  'Team'},
            {href: 'events', label:  'Events'},
            {href: 'contact', label:  'Contact'},
        ];

eventRouter.route('/')
.get(function(req, res){
       mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.find({}).toArray(function(err, results){
               res.render('events', {
                    navItems: navItems,
                    events: results
                });
           });
       });
   
    
});
    
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        mongodb.connect(url, function(err, db){
           var collection = db.collection('events');
           collection.find({_id: ObjectId(id)}).toArray(function(err, results){
                res.render('event', {
                        navItems: navItems,
                        event: results[0]
                });
           });
       });
     
    });

module.exports = eventRouter;