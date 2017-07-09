var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static("public"));
app.use(express.static("bower_components"))

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render('index', {
        list: ['Hello', 'World', 'Sud'],
        navItems: [
            {href: 'services', label: 'Services'},
            {href: 'portfolio', label:  'Portfolio'},
            {href: 'about', label:  'About'},
            {href: 'team', label:  'Team'},
            {href: 'contact', label:  'Contact'},
        ]
    });
});

app.get("/home", function(req, res){
    res.send("Hello World, Sud!");
});

app.listen(port, function(err){
    console.log("The server is running on port: "+ port);
});
