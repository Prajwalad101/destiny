import mongoose from 'mongoose';

export interface IBusiness {
  name: {
    type: string;
  };
  description: string;
  rating: number;
  createdAt: Date;
}

const businessSchema = new mongoose.Schema<IBusiness>({
  name: {
    type: String,
    unique: true,
    required: [true, 'A business must contain a name'],
  },
  description: {
    type: String,
    required: [true, 'A business must contain a description'],
  },
  rating: { type: Number, default: 5 },
  createdAt: { type: Date },
});

const Business = mongoose.model<IBusiness>('Business', businessSchema);

export default Business;
