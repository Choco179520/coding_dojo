import * as mongoose from 'mongoose';
import { UsuarioSchema } from 'src/usuario/schemas/usuario.schema';

export const SalaSchema = new mongoose.Schema({
    nombre: String,
    tiempoPorRespuesta: String,
    usuario: UsuarioSchema
});