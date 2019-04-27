import * as mongoose from 'mongoose';

export const databaseServicio = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://localhost:32768'),
  },
];