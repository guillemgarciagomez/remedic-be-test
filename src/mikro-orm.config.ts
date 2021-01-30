import dotenv from 'dotenv'
dotenv.config();

import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Consultation } from './models/Consultation';
import { Patient } from './models/Patient';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, '/migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  entities: [Patient, Consultation],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  type: 'postgresql',
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];
