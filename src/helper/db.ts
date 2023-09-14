import _mongoose, { connect } from "mongoose";

declare global {
    var mongoose: {
        promise: ReturnType<typeof connect> | null;
        conn: typeof _mongoose | null;
    };
}
const MONGO_DB_URI = process.env.MONGO_DB_URI;

if (!MONGO_DB_URI || MONGO_DB_URI.length === 0) {
    throw new Error("Please add your MongoDB URI to .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
    if (cached.conn) {
        console.log("🚀 Using cached connection");
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };


        cached.promise = connect(MONGO_DB_URI!, opts)
            .then((mongoose: any) => {
                console.log("✅ New connection established");
                return mongoose;
            })
            .catch((error: any) => {
                console.error("❌ Connection to database failed");
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
    }
    catch (error) {
        cached.promise = null;
        throw error;
    }
    return cached.conn;
}
export default connectDB;