var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

//mongoose.connect('mongodb://localhost:27017/dbname');

var router = express.Router();

app.use('/api', router);

router.get('/', function(req, res){
	res.json({message: 'Hello'})
});

app.listen(port);
console.log('Server listening on port ' + port);
