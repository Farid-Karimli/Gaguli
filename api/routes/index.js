var express = require("express");
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.get("/", (req, res) =>
  res.send("Welcome to Make REST API Calls In Express!")
);

module.exports = router;
