var express = require("express");
var app = express();
var tool = "TalkWalker";
var typhoonHaiyan = require("../TyphoonHaiyan.json");
var { PythonShell } = require("python-shell");

// END POINT IN BROWSER
// http://localhost:3000/pyscript

app.get("/pyscript", normalizer);

function normalizer(req, res) {
  var fruits = {
    apples: [3, 2, 0, 1],
    oranges: [0, 3, 7, 2]
  };
  var options = {
    // args: [tool, typhoonHaiyan]
    args: [tool, fruits]
  };
  PythonShell.run("./normalizer.py", options, function(err, data) {
    console.log("\ndata from pyScript: ", data, "\n");
    if (err) res.send(err);
    res.send(data);
    // res.send(data.toString());
  });
}

app.listen(3000, function() {
  console.log("server running on port 3000");
});
