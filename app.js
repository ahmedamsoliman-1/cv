const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const ipaddress = require("ip").address();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get("/", function(req, res) 
{
    res.render("index");
});


app.listen(port, process.env.IP, function() 
{
    console.log(`Website server started on ${ipaddress}:${port}`);
});