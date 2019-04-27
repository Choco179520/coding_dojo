import { Connection } from 'mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';

export const usuarioProviders = [
  {
    provide: 'USUARIO_MODEL',
    useFactory: (connection: Connection) => connection.model('USUARIO', UsuarioSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];