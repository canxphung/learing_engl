import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RedisModule } from '@lib/redis/src/redis.module';
import { UserModule } from './entities/user.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    DatabaseModule,
    RedisModule,
    UserModule,
  ],
})
export class AppModule {}
