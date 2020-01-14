var express = require("express");
var path = require("path");
const fs = require("fs");



// Sets up the Express App
// =============================================================
const app = express();
const PORT =  process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());



//  routing
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});