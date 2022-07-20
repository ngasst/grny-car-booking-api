import { PaginationParams, ResourceResponse } from './../common-types';
import { Car, ICar } from './../db/models';
import { IResolvers } from 'mercurius';
export const carResolvers: IResolvers = {
  Query: {
    cars: async (
      _: unknown,
      { page, size, order, sort }: PaginationParams
    ): Promise<CarsResponse> => {
      const cars = await Car.find()
        .skip((page - 1) * size)
        .limit(size)
        .sort({ createdAt: sort || -1 });
      const total = await Car.countDocuments();
      return {
        ok: true,
        cars,
        total,
      };
    },
  },
};

export type CarsResponse = ResourceResponse & {
  cars: ICar[];
};

export type CarResponse = ResourceResponse & {
  car: ICar;
};
