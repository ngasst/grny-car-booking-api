import { connect } from 'mongoose';
export * from './models';

export async function connectToDatabase() {
  const user = process.env.MONGO_USER ?? 'api';
  const password = process.env.MONGO_PASSWORD ?? 'strongpassword';
  const baseString = `mongodb://${user}:${password}@##HOST##:27017/api`;
  const connectionString =
    process.env.MONGO_URI ?? process.env.NODE_ENV !== 'production'
      ? baseString.replace('##HOST##', 'localhost')
      : baseString.replace('##HOST##', 'some-production-db-connection-string');
  return await connect(connectionString);
}
