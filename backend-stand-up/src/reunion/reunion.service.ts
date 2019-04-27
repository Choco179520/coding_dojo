import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Reunion } from './interfaces/reunion.interface';
import { CrearReunionDto } from './dto/reunion-create.dto';

@Injectable()
export class ReunionService {
    constructor(
        @Inject('REUNION_MODEL') 
        private readonly reunionModel: Model<Reunion>
        ) {}
    
      async create(usuarioACrearDto: CrearReunionDto): Promise<Reunion> {
        const usuarioCreado = new this.reunionModel(usuarioACrearDto);
        return await usuarioCreado.save();
      }
    
      async findAll(): Promise<Reunion[]> {
        return await this.reunionModel.find().exec();
      }

}
