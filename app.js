
const express = require("express"); /* we need express object */
const app = express();

const port = 3000; /*localhost:3000*/
var counter = 0;

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
  res.render("home", {journalEntryList: journalEntryList});

});

app.get("/about", function(req, res) {

  console.log("get request , /about")
  res.render("about")

});

app.get("/contact", function(req, res) {

  console.log("get request, /contact")
  res.render("contact")

});

app.get("/journal", function(req, res) {

  console.log("journal request, /contact")
  res.render("journal")

});

app.post("/", function(req, res) {

  console.log("post request, /");
  console.log(req.body);
  console.log(req.body.addEntry);
  console.log(req.body.subject)

  res.redirect("/journal")


});

app.post("/journal", function(req, res){

  console.log("post request, /journal");
  let entry = req.body.entry;
  let subject = req.body.subjectEntry;
  let beginning = entry.substring(0, 99);
  let entryDate = new Date();
  let EntryObj = {
    date: entryDate,
    beginning: beginning,
    entry: entry,
    subject: subject,
    primaryId: ++counter
  }

  journalEntryList.push(EntryObj);

  res.redirect("/"); /* {journalEntryList:journalEntryList});*/

});

app.get('/journal/:journalEntry', function (req, res ){

  console.log("in the variable entry");
  //console.log(req);
  console.log(req.params);
  let post = req.params.journalEntry;
  let journalPost;
  for(let i = 0; i < journalEntryList.length; i++){
      if(journalEntryList[i].subject === post) {
        journalPost = journalEntryList[i];
      }
  }
  res.render("journalView", {journalPost: journalPost});

});


app.listen(port, function(){

  console.log("gratitude journal server is up and running");

});
