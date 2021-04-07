
const express = require("express"); /* we need express object */
const app = express();

const port = 3000; /*localhost:3000*/

app.use(express.static("public")); /* directory to serve static files(
                                    where css, images, etc go) */
app.set('view engine', 'ejs'); /*passing specific configuration values to express */

app.use(express.urlencoded({
  extended:true
}));


app.get("/", function(req, res){

  console.log("get request, /");
  res.render("journal");

});

app.get("/about", function(req, res) {

  console.log("get request , /about")
  res.render("about")

});

app.get("/contact", function(req, res) {

  console.log("get request, /contact")
  res.render("contact")

});

app.listen(port, function(){

  console.log("gratitude journal server is up and running");

});
