import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    contraseña: String,
    habilitado: Boolean
});