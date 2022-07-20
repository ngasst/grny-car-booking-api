import { Office, IOffice } from './../db/models';
import { IResolvers } from 'mercurius';
import { PaginationParams, ResourceResponse } from '../common-types';
export const officeResolvers: IResolvers = {
  Query: {
    offices: async (
      _: unknown,
      { page, size, order, sort }: PaginationParams
    ): Promise<OfficesResponse> => {
      const offices = await Office.find()
        .skip((page - 1) * size)
        .limit(size)
        .sort({ createdAt: sort || -1 });
      const total = await Office.countDocuments();
      return {
        ok: true,
        offices,
        total,
      };
    },
  },
};

export type OfficesResponse = ResourceResponse & {
  offices: IOffice[];
};
