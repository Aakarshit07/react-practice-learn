import mongoose from "mongoose";

const MONDODB_URI = process.env.MONGODB_URI;

let isConnected = false;

async function dbConnect() {
  if (isConnected) {
    console.log("Mongodb is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(MONDODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to mongodb: ");
  } catch (error) {
    console.error("Error connecting to mongodb: ", error);
    throw error;
  }
}

export default dbConnect;
