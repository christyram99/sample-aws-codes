var docClient = require('./config/dynamoConfig')

/* querying */
var params = {
    TableName: 'Movies',
    KeyConditionExpression: '#yr = :yyyy',
    ExpressionAttributeNames: {
        '#yr': 'year'
    },
    ExpressionAttributeValues: {
        ":yyyy": 1996
    },
    ProjectionExpression: "#yr, info"
}

docClient.query(params, function(err, data) {
    if(err) {
        console.log('error while getting data ', err)
    } else {
        console.log('got data from database ', data)
    }
})

var params2 = {
    TableName: 'Movies',
    KeyConditionExpression: '#yr = :yyyy and title between :letter1 and :letter2',
    ExpressionAttributeNames: {
        '#yr': 'year'
    },
    ExpressionAttributeValues: {
        ':yyyy': 1996,
        ':letter1': 'Q',
        ':letter2': 'R'
    }
}

docClient.query(params2, function(err, data) {
    if(err) {
        console.log('error while getting data ', err)
    } else {
        console.log('got data from database2 ', data)
    }
})

/* scanning */
var params3 = {
    TableName: 'Movies',
    FilterExpression: '#yr between :start_year and :end_year',
    ExpressionAttributeNames : {
        '#yr': 'year'
    },
    ExpressionAttributeValues : {
        ':start_year': 1995,
        ':end_year': 1997
    },
    Limit: "1"
}

docClient.scan(params3, onScan)

function onScan(err, data){
    if(err) {
        console.log('error while find data ', err)
    } else {
        console.log('got data from database3 ', data);
    }
}

/* scanning */
var params3 = {
    TableName: 'Movies'
}

docClient.scan(params3, onScan2)

function onScan2(err, data){
    if(err) {
        console.log('error while find data ', err)
    } else {
        console.log('got data from database4 ', data);
    }
}