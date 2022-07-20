import { app } from './app';

import { connectToDatabase } from './db';

try {
  connectToDatabase().then(() => {
    app.listen({ port: 4000 });
  });
} catch (error) {
  console.error(error);
}
