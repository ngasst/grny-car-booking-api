import { User, IUser } from './../db/models';
import { IResolvers } from 'mercurius';
import { MercuriusContext } from 'mercurius';
import { ResourceResponse } from '../common-types';
export const userResolvers: IResolvers = {
  Query: {
    me: async (
      _: unknown,
      __: unknown,
      { reply }: MercuriusContext
    ): Promise<UserResponse> => {
      const req = reply.request;
      const uid = req.headers.uid;
      const user = await User.findOne({ _id: uid });
      return {
        ok: true,
        user: user as IUser,
      };
    },
  },
};

export type UserResponse = ResourceResponse & {
  user: IUser;
};
