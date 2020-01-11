var express = require("express");
var path = require("path");
const fs = require("fs");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// var notesData = require ('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



var notes = [{
  title:"test",
  text:"abc"
}];


//  routing
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get("/notes",function(req,res){
  res.sendFile(path.join(__dirname,"./public/notes.html"))
})
//  default to home page
app.get("*", function (req,res){
  res.sendFile(path.join(__dirname,"./public/index.html"))
})
// API
app.get("/api/notes", function (req, res) {
  return res.json(JSON.stringify(notes));
});
app.get("/api/clear", function (req, res) {
  notes = [];
});

app.post("/api/notes", function (req, res) {
  console.log("here");
  var newNotes = req.body;
  
  console.log(newNotes);
  notes.push(newNotes);

  notes.forEach(Id);

  function Id (item, index){
      item.id = index + 1;
  };

  let save = JSON.stringify(notes);
  fs.writeFileSync("./db/db.json",save)

  res.json(JSON.stringify(notes));

  
  console.log(notes);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});