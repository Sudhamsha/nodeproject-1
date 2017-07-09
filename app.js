var express = require("express");
var app = express();
var port = process.env.PORT;
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

app.use(express.static("public"));
app.use(express.static("bower_components"))

app.set('views', './src/views');
app.set('view engine', 'ejs');

var navItems = {
        navItems: [
            {href: 'services', label: 'Services'},
            {href: 'portfolio', label:  'Portfolio'},
            {href: 'about', label:  'About'},
            {href: 'team', label:  'Team'},
            {href: 'events', label:  'Events'},
            {href: 'contact', label:  'Contact'},
        ]
    };
    
app.use('/events', eventRouter);
app.use('/db', dbRouter);

app.get("/", function(req, res){
    res.render('index', navItems);
});

app.get("/home", function(req, res){
    res.send("Hello World, Sud!");
});

app.listen(port, function(err){
    console.log("The server is running on port: "+ port);
});
