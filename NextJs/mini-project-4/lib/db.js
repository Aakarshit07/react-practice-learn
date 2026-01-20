import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error("Please define the mongodb uri env variable");
}

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;

    console.log("Connected to mongodb");
  } catch (error) {
    console.error("Error connecting to mongodb: ", error);
    throw error;
  }

  return cached.conn;
}

export default dbConnect;
