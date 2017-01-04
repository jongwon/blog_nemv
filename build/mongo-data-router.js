var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , ObjectID = require('mongodb').ObjectID;
// var mongo_url = "mongodb://id:passwd@server:27017/dbname"
var mongo_url = "mongodb://nemv_user:rneahsld2015!@soreply:27017/nemv"


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('data home page');
});

// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

router.get('/test', function (req, res) {
  res.send('Hello World!');
});

router.get('/blogs/tech', function(req, res) {

    MongoClient.connect(mongo_url, function(err, db) {
		if(err) { return console.dir(err); }
	    var mypapers = db.collection('blog_articles')
	    mypapers.find({}).toArray(function(err, blogs){
		    res.send(blogs);
		    res.end()
		    db.close()
		});
	});

});

module.exports = router;