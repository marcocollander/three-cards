import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// @ts-ignore
let cached = global.mongoose || { conn: null, promise: null };

export const dbConnect = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise =
        cached.promise ||
        mongoose.connect(MONGODB_URI, {
            dbName: 'three-cards',
            bufferCommands: false,
        });

    cached.conn = await cached.promise;
    return cached.conn;
};
