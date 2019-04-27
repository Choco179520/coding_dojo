import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { SalaModule } from './sala/sala.module';
import { WebSocketModule } from './sala/web-socket/web-socket.module';
import { ReunionModule } from './reunion/reunion.module';

@Module({
  imports: [
    UsuarioModule,
    SalaModule,
    ReunionModule,
    //WebSocketModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
