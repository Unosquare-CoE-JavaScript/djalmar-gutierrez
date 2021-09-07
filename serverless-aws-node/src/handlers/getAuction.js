import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createHttpError from 'http-errors';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export async function getAuctionById(id) {
  let auction;
  try {
    let result = await dynamoDb
      .get({
        TableName: process.env.AUCTIONS_TABLE_NAME,
        Key: { id },
      })
      .promise();
    auction = result.Item;
  } catch (e) {
    console.log(e);
    throw new createHttpError.InternalServerError(e);
  }
  if (!auction) {
    throw new createHttpError.NotFound(`Auction with id: ${id} not found`);
  }
  return auction;
}

async function getAuction(event, context) {
  const { id } = event.pathParameters;

  let auction = await getAuctionById(id);

  return {
    statusCode: 200,
    body: JSON.stringify(auction),
  };
}

export const handler = commonMiddleware(getAuction);
