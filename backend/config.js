import dotenv from 'dotenv';

dotenv.config();

export default {
    MONGODB_URL: 'mongodb://localhost/ecoprice',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    accessKeyId: process.env.accessKeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey'
}
