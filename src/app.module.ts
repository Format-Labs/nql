import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueryController } from './query/query.controller';
import { Query } from './query';
import { SyncController } from './sync/sync.controller';
import { Sync } from './sync';

@Module({
  imports: [],
  controllers: [AppController, QueryController, SyncController],
  providers: [AppService, Query, Sync],
})
export class AppModule {}
