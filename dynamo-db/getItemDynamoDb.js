var docClient = require('./config/dynamoConfig')

var params = {
    TableName: "Movies",
    Key: {
        "year": 1996,
        "title": "Sravan"
    }
}

docClient.get(params, function(err, data){
    if(err) {
        console.log('error occured ', err)
    }else {
        console.log('successfully get data ', data)
    }
})