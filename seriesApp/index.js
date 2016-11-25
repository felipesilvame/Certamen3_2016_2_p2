var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var app = express();

mongoose.connect('mongodb://localhost/series', function(err, res){
	if(err) throw err;
	console.log('Connected!');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/serie')(app, mongoose);
var SerieCtrl = require('./controllers/serie');
var router = express.Router();


// Index
router.get('/', function(req, res) { 
 res.send("Testing...");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/series') 
 .get(SerieCtrl.findAll)
 .post(SerieCtrl.add);

api.route('/series/:id') 
 .get(SerieCtrl.findById)
 .put(SerieCtrl.update)
 .delete(SerieCtrl.delete);

app.use('/', api);

// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});