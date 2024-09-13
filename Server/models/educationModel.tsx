import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Education document
interface IEducation extends Document {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

// Define the schema for the Education document
const EducationSchema: Schema = new Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

// Create the model for the Education document
const Education = mongoose.model<IEducation>("Education", EducationSchema);

export default Education;