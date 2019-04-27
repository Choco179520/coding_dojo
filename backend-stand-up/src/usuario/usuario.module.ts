import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { usuarioProviders } from './usuario.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UsuarioController],
    providers: [UsuarioService, ...usuarioProviders],
})
export class UsuarioModule {}
