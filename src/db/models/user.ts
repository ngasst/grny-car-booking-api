import { Schema, model, Document, models } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
}

const schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual('id').get(function (this: IUser) {
  return this._id.toString();
});


export const User = model<IUser>('User', schema);
