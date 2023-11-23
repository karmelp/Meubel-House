import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const JSON_SERVER_URL = 'https://meubel-house.vercel.app/app/api/json-server';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const response = await fetch(`${JSON_SERVER_URL}${req.url}`);
  const data = await response.json();
  res.json(data);
}