const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');

// set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// for css
app.use(express.static('public'));

//get routes
const home = require("./routes/api.js")
app.use("/", home)

app.listen(port, () => {
  console.log("listening on port", port);
});
