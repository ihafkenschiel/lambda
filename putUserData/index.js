'use strict'
const AWS = require('aws-sdk');

AWS.config.update({ region: "us-west-1" })

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10"});
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-1"});

    const params = {
        TableName: "Users",
        Item: {
            id: "124",
            firstName: "Peki",
            lastName: "Florianopolis"
        }
    }

    try {
        const data = await documentClient.put(params).promise();
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}