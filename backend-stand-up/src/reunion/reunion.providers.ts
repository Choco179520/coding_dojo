import { Connection } from 'mongoose';
import { ReunionSchema } from './schemas/reunion.schema';

export const reunionProviders = [
  {
    provide: 'REUNION_MODEL',
    useFactory: (connection: Connection) => connection.model('REUNION', ReunionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];