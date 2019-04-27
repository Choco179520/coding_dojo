import { Module } from '@nestjs/common';
import { SalaController } from './sala.controller';
import { SalaService } from './sala.service';
import { DatabaseModule } from 'src/database/database.module';
import { salaProviders } from './sala.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SalaController],
  providers: [SalaService, ...salaProviders]
})
export class SalaModule {}
