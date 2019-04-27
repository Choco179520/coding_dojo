export class CrearReunionDto {
    estadoReunion: boolean;
    ordenAsistentes: string[];
    resumen: string[];
    fecha: Date;
    horaInicio: string;
    horaFin: string;
}