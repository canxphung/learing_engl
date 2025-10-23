import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RedisModule } from '../../../lib/redis/redis.module';
import { User } from './entities/user.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // TypeORM for auth database
    TypeOrmModule.forRootAsync({
      useFactory: (config) => ({
        type: 'mariadb',
        host: config.get('AUTH_DB_HOST', 'localhost'),
        port: +config.get('AUTH_DB_PORT', 3306),
        username: config.get('AUTH_DB_USER'),
        password: config.get('AUTH_DB_PASS'),
        database: config.get('AUTH_DB_NAME'),
        entities: [User],
        synchronize: false,
      }),
      inject: [ConfigModule],
    }),
    
    TypeOrmModule.forFeature([User]),
    
    // JWT configuration
    JwtModule.registerAsync({
      useFactory: (config) => ({
        secret: config.get('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get('JWT_EXPIRES_IN', '24h'),
        },
      }),
      inject: [ConfigModule],
    }),
    
    PassportModule,
    RedisModule, // Global Redis module
  ],
  
  providers: [JwtStrategy],
  
  controllers: [],
})
export class AppModule {}