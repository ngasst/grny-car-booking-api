import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { buildSchema } from 'graphql';
import mercurius, { IResolvers } from 'mercurius';
import { codegenMercurius, loadSchemaFiles } from 'mercurius-codegen';
import { mergeResolvers } from '@graphql-tools/merge';

import {
  bookingLoaders,
  userLoaders,
  carLoaders,
  officeLoaders,
} from './loaders';
import {
  bookingResolvers,
  carResolvers,
  officeResolvers,
  userResolvers,
} from './resolvers';
import { graphqlObjectMerge } from './utils';

const loaders = {
  ...bookingLoaders,
  ...userLoaders,
  ...carLoaders,
  ...officeLoaders,
};

const resolvers = graphqlObjectMerge([
  bookingResolvers as any,
  userResolvers as any,
  carResolvers as any,
  officeResolvers as any,
]);
// typed any as this kept crashing the remote host extension. Obviously needs to be cleaned up.

export const app = Fastify({
  logger: true,
});

const { schema } = loadSchemaFiles('src/graphql/schema/**/*.gql', {
  watchOptions: {
    enabled: process.env.NODE_ENV !== 'production',
    onChange(schema) {
      app.graphql.replaceSchema(buildSchema(schema.join('\n')));
      app.graphql.defineResolvers(resolvers);
      codegen();
    },
  },
});

export const buildContext = async (
  req: FastifyRequest,
  _reply: FastifyReply
) => {
  return {
    authorization: req.headers.authorization,
    uid: req.headers.uid,
  };
};

app.register(mercurius, {
  schema,
  context: buildContext,
  loaders,
  resolvers,
  graphiql: true,
  subscription: false,
});

function codegen() {
  codegenMercurius(app, {
    targetPath: 'src/graphql/generated.ts',
    operationsGlob: 'src/graphql/operations/*.gql',
  }).catch(console.error);
}

codegen();
