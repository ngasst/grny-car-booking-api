import { Schema, model, Document } from 'mongoose';

export interface ICar extends Document {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  description: string;
  images: string[];
}

const schema = new Schema<ICar>(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

schema.virtual('id').get(function (this: ICar) {
  return this._id.toString();
});

export const Car = model<ICar>('Car', schema);
