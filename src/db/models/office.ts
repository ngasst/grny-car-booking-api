import { Schema, model, Document } from 'mongoose';

export interface IOffice extends Document {
  name: string;
  address: string;
  phone: string;
  email: string;
  images: string[];
  description: string;
  latitude: number;
  longitude: number;
}

const schema = new Schema<IOffice>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual('id').get(function (this: IOffice) {
  return this._id.toString();
});

export const Office = model<IOffice>('User', schema);
