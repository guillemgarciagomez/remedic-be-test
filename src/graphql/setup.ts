import {Request, Response} from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ConsultationResolver } from './resolvers/Consultation.resolver';
import { PatientResolver } from './resolvers/Patient.resolver';
import { ApolloContext, dbConnection } from './apolloContext';
import { Patient } from '../models/Patient';
import { Consultation } from '../models/Consultation';

const setupApolloServer = async (em : dbConnection) =>
  new ApolloServer({
    schema: await buildSchema({
      resolvers: [PatientResolver, ConsultationResolver] ,
      validate: false
    }),
    context: (req: Request, res: Response) : ApolloContext => ({
      patients: em.getRepository(Patient),
      consultations: em.getRepository(Consultation),
      req,
      res
    })
  });

export default setupApolloServer;
