import * as mongoose from 'mongoose';
import { SalaSchema } from 'src/sala/schemas/sala.schema';

export const ReunionSchema = new mongoose.Schema({
    estadoReunion: Boolean,
    ordenAsistentes: String,
    resumen: String,
    fecha: Date,
    horaInicio: String,
    horaFin: String,
    sala: SalaSchema
});