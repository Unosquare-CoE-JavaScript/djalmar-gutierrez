import { closeAuction } from '../lib/closeAuction';
import { getEndedAuctions } from '../lib/getEndedAuctions';
import createError from 'http-errors';

async function processAuctions(event, context) {
  try {
    let endedAuctions = await getEndedAuctions();
    const closedPromises = endedAuctions.map((auction) =>
      closeAuction(auction)
    );
    await Promise.all(closedPromises);
    return {
      closed: closedPromises.length,
    };
  } catch (e) {
    console.log(e);
    throw new createError.InternalServerError(e);
  }
}

export const handler = processAuctions;
