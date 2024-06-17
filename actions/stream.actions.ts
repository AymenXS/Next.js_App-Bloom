'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.SECRET_STREAM_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error('User is not logged in');
  if (!apiKey) throw new Error('API Key missing');
  if (!apiSecret) throw new Error('API Secret missing');

  const streamClient = new StreamClient(apiKey, apiSecret);

  const expiration = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(Date.now() / 1000) - 60;

  const token = streamClient.createToken(user.id, expiration, issued);

  return token;
};
