import { Module } from '@nestjs/common';
import { databaseServicio } from './database.servicio';

@Module({
    providers: [...databaseServicio],
    exports: [...databaseServicio],
})
export class DatabaseModule {}
