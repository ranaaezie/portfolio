const express = require ("express");
const bodyParser = require ("body-parser");

const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
//app.use(express.static("img"));
//app.use(express.static("css"));
//app.use(express.static("fonts"));
//app.use(express.static("js"));
//app.use('/static', express.static('public'))

app.get("/", function( req, res ){

    var today = new Date ();
    var currentDay = today.getDate();

    res.render("home", {date: currentDay});
})

//app.post("/", function(req,res){
//    res.send("Thanks for posting")
//})


app.listen(
    3000, function () {
        console.log("Server is now Listening at localhost: 3000")
    }
)
