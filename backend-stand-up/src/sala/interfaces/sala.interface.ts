import { Document } from 'mongoose';
import { CrearUsuarioDto } from 'src/usuario/dto/usuario-create.dto';

export interface Sala extends Document {
    nombre: string;
    tiempoPorRespuesta: string;
}