import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './config/typeorm.config';
import { ShowModule } from './show/show.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    ShowModule,
    TypeOrmModule.forRoot(typeORMConfig),
    ReservationsModule,
  ],
})
export class AppModule {}
