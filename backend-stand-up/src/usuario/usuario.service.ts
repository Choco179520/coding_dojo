import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CrearUsuarioDto } from './dto/usuario-create.dto';
import { Usuario } from './interfaces/usuario.interface';


@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_MODEL') 
    private readonly usuarioModel: Model<Usuario>
    ) {}

  async create(usuarioACrearDto: CrearUsuarioDto): Promise<Usuario> {
    const usuarioCreado = new this.usuarioModel(usuarioACrearDto);
    return await usuarioCreado.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.find().exec();
  }
}