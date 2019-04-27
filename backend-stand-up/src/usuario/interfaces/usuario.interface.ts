import { Document } from 'mongoose';

export interface Usuario extends Document {
    nombre: string;
    correo: string;
    contraseña: string;
    habilitado: boolean;
}