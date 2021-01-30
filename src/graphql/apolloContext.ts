import { EntityManager, IDatabaseDriver, Connection, EntityRepository } from "@mikro-orm/core";
import {Request, Response} from 'express';
import { Consultation } from "../models/Consultation";
import { Patient } from "../models/Patient";

export type dbConnection = EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
export type ApolloContext  = {
  patients: EntityRepository<Patient>;
  consultations: EntityRepository<Consultation>;
  req: Request;
  res: Response;
}
