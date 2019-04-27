import { Injectable, Inject } from '@nestjs/common';
import { Sala } from './interfaces/sala.interface';
import { CrearSalaDto } from './dto/sala-create.dto';
import { Model } from 'mongoose';

@Injectable()
export class SalaService {

    constructor(
        @Inject('SALA_MODEL') 
        private readonly salaModel: Model<Sala>
        ) {}
    
      async create(usuarioACrearDto: CrearSalaDto): Promise<Sala> {
        const usuarioCreado = new this.salaModel(usuarioACrearDto);
        return await usuarioCreado.save();
      }
    
      async findAll(): Promise<Sala[]> {
        return await this.salaModel.find().exec();
      }
}
