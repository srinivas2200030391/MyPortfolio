import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Experience document
interface IExperience extends Document {
  title: string;
  company: string;
  duration: string;
  description: string;
}

// Define the schema for the Experience document
const ExperienceSchema: Schema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the model for the Experience document
const Experience = mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;
