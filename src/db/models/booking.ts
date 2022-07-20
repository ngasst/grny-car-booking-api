import { IUser } from './user';
import { Schema, model, SchemaTypes, Document } from 'mongoose';
import { ICar } from './car';
import { IOffice } from './office';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
}

export enum BookingKind {
  CAR = 'car',
  OFFICE = 'office',
}

export interface IBooking extends Document {
  kind: string;
  start: Date;
  end: Date;
  user: IUser['id'];
  car: ICar['id'];
  status: BookingStatus;
  office: IOffice['id'];
}

const schema = new Schema<IBooking>(
  {
    kind: {
      type: String,
      required: true,
      enum: ['office', 'car'],
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'approved', 'cancelled'],
    },
    office: {
      type: SchemaTypes.ObjectId,
      ref: 'Office',
      required: false,
    },
    car: {
      type: SchemaTypes.ObjectId,
      ref: 'Car',
      required: false,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

schema.virtual('id').get(function (this: IBooking) {
  return this._id.toString();
});

export const Booking = model<IBooking>('Booking', schema);
