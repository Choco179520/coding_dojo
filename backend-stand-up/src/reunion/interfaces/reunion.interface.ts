import { Document } from 'mongoose';

export interface Reunion extends Document {
    estadoReunion: boolean;
    ordenAsistentes: string[];
    resumen: string[];
    fecha: Date;
    horaInicio: string;
    horaFin: string;
}