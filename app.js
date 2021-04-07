
const express = require("express"); /* we need express object */
const app = express();

const port = 3000; /*localhost:3000*/

app.use(express.static("public")); /* directory to serve static files(
                                    where css, images, etc go) */
app.set('view enginer', 'ejs'); /*passing specific configuration values to express */

app.use(express.urlencoded({
  extended:true
}));


app.get("/", function(req, res){

  res.send("<h1>Hello World </h1>");

});

app.listen(port, function(){

  console.log("gratitude journal server is up and running");

});
