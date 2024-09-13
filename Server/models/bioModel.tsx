import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Bio document
interface IBio extends Document {
  bio: string[];
}

// Define the schema for the Bio document
const BioSchema: Schema = new Schema({
  bio: { type: [String], required: true },
});

// Create the model for the Bio document
const Bio = mongoose.model<IBio>("Bio", BioSchema);

export default Bio;
