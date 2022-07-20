import { connect } from 'mongoose';
export * from './models';

export async function connectToDatabase() {
  const user = process.env.MONGO_USER ?? 'api-user';
  const password = process.env.MONGO_PASSWORD ?? 'password';
  const baseString = `mongodb://${user}:${password}@##HOST##:27017/api?authSource=bookings`;
  const connectionString =
    process.env.MONGO_URI ?? process.env.NODE_ENV !== 'production'
      ? baseString.replace('##HOST##', 'localhost')
      : baseString.replace('##HOST##', 'some-production-db-connection-string');
  console.log(connectionString);
  return await connect(connectionString);
}
