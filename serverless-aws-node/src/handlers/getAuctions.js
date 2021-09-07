import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createHttpError from 'http-errors';
import validator from '@middy/validator';
import getAuctionSchema from '../lib/schemas/getAuctionsSchema';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function getAuctions(event, context) {
  let auctions;
  let { status } = event.queryStringParameters;
  let params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    IndexName: 'statusAndEndDate',
    KeyConditionExpression: '#status = :status',
    ExpressionAttributeValues: {
      ':status': status,
    },
    ExpressionAttributeNames: {
      '#status': 'status',
    },
  };

  try {
    let result = await dynamoDb.query(params).promise();
    auctions = result.Items;
  } catch (e) {
    console.log(e);
    throw new createHttpError.InternalServerError(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions),
  };
}

export const handler = commonMiddleware(getAuctions).use(
  validator({
    inputSchema: getAuctionSchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
);
