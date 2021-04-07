
const express = require("express"); /* we need express object */
const app = express();

const port = 3000; /*localhost:3000*/

app.use(express.static("public")); /* directory to serve static files(
                                    where css, images, etc go) */
app.set('view engine', 'ejs'); /*passing specific configuration values to express */

app.use(express.urlencoded({
  extended:true
}));

/* array to hold journal entries */
let journalEntryList = [];
/* journal entry object = {
 * date: date as String ,
 * beginning: first 100 characters of a journal entry ,
 * entry: the entire journal entry
 * }
 */

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

app.post("/", function(req, res) {

  console.log("post request");
  let calledFrom = req.body.addEntry;

  if(calledFrom !== "addEntry"){

    res.redirect("home");

  }

  res.direct("journal")


});

app.post("/journal", function(req, res){

  let entry = req.body.entry;
  let beginning = entry.substring(0, 99);
  let entryDate = new Date();
  let EntryObj = {
    date: entryDate,
    beginning: beginning,
    entry: entry
  }

  journalEntryList.push(EntryObj);
  
});

app.listen(port, function(){

  console.log("gratitude journal server is up and running");

});
