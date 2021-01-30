import { MikroORM} from '@mikro-orm/core';
import express from 'express';
import cors from 'cors';

import config from './mikro-orm.config'
import { __prod__ } from './constants';
import socketServer from './socket';
import setupApolloServer from './graphql/setup';

const port = process.env.PORT || 4000;
const socketPort = process.env.SOCKET_PORT || 3001;

(async() => {
  // Init DataBase
  const db = await MikroORM.init(config);
  // Perform migrations in ./migrations folder
  await db.getMigrator().up();

  // Setup Apollo Server with express
  const app = express();
  app.use(cors());
  const apolloServer = await setupApolloServer(db.em)
  apolloServer.applyMiddleware({ app });

  // Fire up socket.io server
  socketServer.listen(socketPort , () => {
    console.log(`💻 socketio ready on http://localhost:${socketPort} 💻`);
  });

  // Fire up GQL server
  app.listen(port, () => {
    console.log(`🚀 server running on http://localhost:${port}/graphql 🚀`);
  });


})();
