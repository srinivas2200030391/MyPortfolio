import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Project document
interface IProject extends Document {
  id: number;
  name: string;
  description: string;
  image: string;
  githubLink: string;
}

// Define the schema for the Project document
const ProjectSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  githubLink: { type: String, required: true },
});

// Create the model for the Project document
const Project = mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
