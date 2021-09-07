import AWS from 'aws-sdk';
import commonMiddleware from '../lib/commonMiddleware';
import createHttpError from 'http-errors';
import { getAuctionById } from './getAuction';
import validator from '@middy/validator';
import placeBidSchema from '../lib/schemas/placeBidSchema';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function placeBid(event, context) {
  const { id } = event.pathParameters;
  const { email } = event.requestContext.authorizer;
  const { amount } = event.body;

  let auction = await getAuctionById(id);

  if (auction.status != 'OPEN') {
    throw new createHttpError.Forbidden(`Cannot bid on closed auctions`);
  }

  if (amount <= auction.highestBid.amount) {
    throw new createHttpError.Forbidden(
      `Yout bid must be higher than ${auction.highestBid.amount}`
    );
  }

  if (auction.seller == email) {
    throw new createHttpError.Forbidden(`Cannot bid in own auction`);
  }

  if (auction.highestBid.bidder == email) {
    throw new createHttpError.Forbidden(`You are the current highest bidder`);
  }

  const params = {
    TableName: process.env.AUCTIONS_TABLE_NAME,
    Key: { id },
    UpdateExpression:
      'set highestBid.amount = :amount, highestBid.bidder = :bidder',
    ExpressionAttributeValues: {
      ':amount': amount,
      ':bidder': email,
    },
    ReturnValues: 'ALL_NEW',
  };

  let updatedAuction;
  try {
    const result = await dynamoDb.update(params).promise();
    updatedAuction = result.Attributes;
  } catch (e) {
    console.log(e);
    throw new createHttpError.InternalServerError(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

export const handler = commonMiddleware(placeBid).use(
  validator({ inputSchema: placeBidSchema, ajvOptions: { strict: false } })
);
