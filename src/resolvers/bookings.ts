import { Booking, IBooking } from './../db/models';
import { subDays, format } from 'date-fns';
import { IResolvers } from 'mercurius';
export const bookingResolvers: IResolvers = {
  Query: {
    bookings: async (
      _: unknown,
      { filters, pagination }: BookingListParams
    ): Promise<{ total: number; bookings: IBooking[] }> => {
      const { page, limit } = pagination;
      const { officeId, carId, userId, startDate, endDate, status, age } =
        filters;
      const query = Booking.find();
      if (officeId) {
        query.where('officeId').equals(officeId);
      }
      if (carId) {
        query.where('carId').equals(carId);
      }
      if (userId) {
        query.where('userId').equals(userId);
      }
      if (startDate && endDate) {
        query.where({
          startDate: { $gte: startDate },
          endDate: { $lte: endDate },
        });
      }
      if (status) {
        query.where('status').equals(status);
      }
      if (age) {
        const ref = format(subDays(new Date(), age), 'yyyy-MM-dd');
        query.where({ createdAt: { $gte: ref } });
      }
      const total = await query.countDocuments();
      const bookings = await query
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 })
        .populate('office')
        .populate('car');
      return {
        bookings,
        total,
      };
    },
  },
  Mutation: {
    makeReservation: async (_: unknown, { booking }: MakeReservationParams) => {
      const { startDate, endDate, officeId, carId, userId } = booking;
      const bookingDoc = new Booking({
        startDate,
        endDate,
        officeId,
        carId,
        userId,
      });
      await bookingDoc.save();
      return bookingDoc;
    },
  },
};

export type BookingListParams = {
  filters: BookingFilter;
  pagination: Pagination;
};

export type BookingFilter = {
  officeId?: string;
  carId?: string;
  userId?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  kind?: string;
  age?: number;
};

export type Pagination = {
  page: number;
  limit: number;
};
