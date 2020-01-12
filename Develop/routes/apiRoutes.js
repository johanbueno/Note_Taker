const fs = require('fs');

var notesData = require("../db/db.json");


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        return res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {
        console.log("here");
        var newNotes = req.body;

        // adding ID
        notesData.forEach(Id);

        function Id(item, index) {
            item.id = index + 1;
        };

        console.log(newNotes);
        notesData.push(newNotes);


        let save = JSON.stringify(notesData);
        fs.writeFileSync("../db/db.json", save)

        res.json(JSON.stringify(notesData));
        res.redirect('back');


        console.log(notes);
    });
    app.delete("/api/notes/:id", function (req, res) {
        var delNoteid = req.params.id;
        console.log("id... " + delNoteid)
        notesData.forEach(function (note, index) {
          if (delNoteid == note.id) {
    
            notesData.splice(index, 1);
          console.log(notesData);
          fs.writeFile("../db/db.json", JSON.stringify(notesData), (results, err) => {
            if (err) throw err;
            res.json(results)
          });
      
          }
        })
    
      });
}
