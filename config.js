import dotenv from 'dotenv';
dotenv.config();
export const mongodb= process.env.MongoURI;
export const port = process.env.PORT;