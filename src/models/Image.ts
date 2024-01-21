import mongoose, { Document, Schema } from 'mongoose';

interface ImageDocument extends Document {
  filename: string;
  filePath: string;
}

const imageSchema = new Schema({
  filename: String,
  filePath: String,
});

const Image = mongoose.model<ImageDocument>('Image', imageSchema);

export default Image;
