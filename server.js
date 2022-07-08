var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

app.use('/api', router);

router.get('/', function(req, res){
	res.json({message: 'Hello'})
});

app.listen(port);
console.log('Server listening on port ' + port);
