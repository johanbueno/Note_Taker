var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [{
  title:"test",
  body:"abc"
}];
//  routing
app.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/notes",function(req,res){
  res.sendFile(path.join(__dirname,"notes.html"))
})
// API
app.get("/api/notes", function (req, res) {
  return res.json(notes);
});
app.post("/api/notes", function (req, res) {

  var newNotes = req.body;
  console.log(newNotes);
  console.log(notes);

  newNotes.routeName = newNotes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newNotes);

  
  res.json(newNotes);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});