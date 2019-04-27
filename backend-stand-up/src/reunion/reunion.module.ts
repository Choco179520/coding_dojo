import { Module } from '@nestjs/common';
import { ReunionController } from './reunion.controller';
import { ReunionService } from './reunion.service';
import { DatabaseModule } from 'src/database/database.module';
import { reunionProviders } from './reunion.providers';

@Module({
  controllers: [ReunionController],
  providers: [ReunionService, ...reunionProviders],
  imports: [DatabaseModule]
})
export class ReunionModule {}
