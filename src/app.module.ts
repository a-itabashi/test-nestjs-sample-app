import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import dataSource from './config/database.config';
// import AppDataSource from './config/database.config';
import { AppDataSource } from './data-source'; // 追加

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // .env を読み込む
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...AppDataSource.options, // 統一された設定を利用
      }),
    }),
    // TypeOrmModule.forFeature([User]), // エンティティを登録
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
