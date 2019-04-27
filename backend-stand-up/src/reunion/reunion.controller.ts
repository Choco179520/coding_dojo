import { Controller, Body, Post, Get } from '@nestjs/common';
import { ReunionService } from './reunion.service';
import { CrearReunionDto } from './dto/reunion-create.dto';
import { Reunion } from './interfaces/reunion.interface';

@Controller('reunion')
export class ReunionController {
    constructor(
        private readonly _reunionService: ReunionService
    ) {}

    @Post()
    async create(
        @Body() crearReunionDto: CrearReunionDto
        ) {
        this._reunionService.create(crearReunionDto);
    }

    @Get()
    async findAll(): Promise<Reunion[]> {
        return this._reunionService.findAll();
    }
}

