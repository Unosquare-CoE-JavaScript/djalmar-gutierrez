import { uploadPictureToS3 } from '../lib/uploadPicture';
import { getAuctionById } from './getAuction';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import createHttpError from 'http-errors';
import { updateAuctionPicture } from '../lib/updateAuctionPicture';
import validator from '@middy/validator';
import uploadAuctionPictureSchema from '../lib/schemas/uploadAuctionPictureSchema';

export async function uploadAuctionPicture(event) {
  const { id } = event.pathParameters;
  const auction = await getAuctionById(id);
  const base64 = event.body.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64, 'base64');
  const { email } = event.requestContext.authorizer;

  if (auction.seller != email) {
    throw new createHttpError.Unauthorized(
      `Your are not the owner of the auction`
    );
  }

  let updatedAuction;
  try {
    const pictureUrl = await uploadPictureToS3(`${auction.id}.jpg`, buffer);
    updatedAuction = await updateAuctionPicture(auction, pictureUrl);
  } catch (e) {
    console.error(e);
    createHttpError.InternalServerError(e);
  }
  return {
    statusCode: 200,
    body: JSON.stringify(updatedAuction),
  };
}

export const handler = middy(uploadAuctionPicture)
  .use(
    validator({
      inputSchema: uploadAuctionPictureSchema,
    })
  )
  .use(httpErrorHandler());
