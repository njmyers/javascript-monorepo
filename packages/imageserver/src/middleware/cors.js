// @flow
import cors from 'cors';
import recipients from '../recipients';
import { createWWWURL } from '../lib';

// create www urls as well
const allRecipients: Array<string> = [
  ...recipients,
  ...recipients.map((url) => createWWWURL(url)),
];

const corsMiddleware = cors({
  origin: '*', //allRecipients,
  methods: 'POST, GET',
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export default corsMiddleware;
