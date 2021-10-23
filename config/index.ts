const dev = process.env.NODE_ENV !== 'production';

export const HOST_NAME = dev
  ? 'http://localhost:3000'
  : 'https://cryptohopper-assignment.vercel.app';
