/* importing dynamodb from config */
var docClient = require('./config/dynamoConfig')

var params = {
    "TableName": "Movies",
    "Item": {
        "year": 1997,
        "title": "Sravan2",
        "info": "Sample movie2"
    }
};

docClient.put(params, function(err, data) {
    console.log('test ')
    if(err) {
        console.log('error while creating data', err)
    }else {
        console.log('successfully inserted data')
    }
});