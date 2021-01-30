import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import {Request, Response} from 'express';

export type dbConnection = EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
export type ApolloContext  = {
  em: dbConnection;
  req: Request;
  res: Response;
}
