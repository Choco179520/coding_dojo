import { Controller, Post, Get, Body } from '@nestjs/common';
import { SalaService } from './sala.service';
import { CrearSalaDto } from './dto/sala-create.dto';
import { Sala } from './interfaces/sala.interface';

@Controller('sala')
export class SalaController {
    constructor(
        private readonly _salaService: SalaService
    ) {}

    @Post()
    async create(
        @Body() crearSalaDto: CrearSalaDto
        ) {
        this._salaService.create(crearSalaDto);
    }

    @Get()
    async findAll(): Promise<Sala[]> {
        return this._salaService.findAll();
    }
}
