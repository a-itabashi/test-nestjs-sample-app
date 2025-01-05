import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// 環境変数のロード
dotenv.config();

// const dataSource = new DataSource({
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/entities/*.entity.js'], // エンティティパス
  migrations: ['dist/migrations/*.js'], // マイグレーションパス
  // entities: ['src/entities/*.entity.ts'], // ソースコード用パス
  // migrations: ['src/migrations/*.ts'], // ソースコード用パス
  synchronize: false, // 本番環境では false
  logging: true,
});

// import { DataSource } from 'typeorm';
// import { ConfigService } from '@nestjs/config';

// // AppDataSource の設定関数をエクスポート
// export const AppDataSource = (configService: ConfigService): DataSource => {
//   return new DataSource({
//     type: 'mysql',
//     host: configService.get<string>('DB_HOST'),
//     port: configService.get<number>('DB_PORT'),
//     username: configService.get<string>('DB_USERNAME'),
//     password: configService.get<string>('DB_PASSWORD'),
//     database: configService.get<string>('DB_DATABASE'),
//     entities: ['src/entities/*.entity.ts'], // ソースコード用パス
//     migrations: ['src/migrations/*.ts'], // ソースコード用パス
//     synchronize: false, // 本番環境では false
//     logging: true,
//   });
// };
