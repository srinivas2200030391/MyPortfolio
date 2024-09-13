import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the HERO document
interface IHero extends Document {
  name: string;
  greet: string;
  description: string;
  image: string;
}

const HeroSchema: Schema = new Schema({
  name: { type: String, required: true },
  greet: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Hero = mongoose.model<IHero>("Hero", HeroSchema);

export default Hero;
