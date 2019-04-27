import { Controller, Post, Get, Body } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioService } from './usuario.service';
import { CrearUsuarioDto } from './dto/usuario-create.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly _usuarioService: UsuarioService
    ) {}

    @Post()
    async create(
        @Body() crearUsuarioDto: CrearUsuarioDto
        ) {
        this._usuarioService.create(crearUsuarioDto);
    }

    @Get()
    async findAll(): Promise<Usuario[]> {
        return this._usuarioService.findAll();
    }

}