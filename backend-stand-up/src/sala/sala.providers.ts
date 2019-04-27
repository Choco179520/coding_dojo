import { Connection } from 'mongoose';
import { SalaSchema } from './schemas/sala.schema';

export const salaProviders = [
  {
    provide: 'SALA_MODEL',
    useFactory: (connection: Connection) => connection.model('SALA', SalaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];