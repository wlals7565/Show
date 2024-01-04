import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Show extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: '기본 아이디' })
  id: number;

  @Column()
  @ApiProperty({ description: '공연 이름' })
  name: string;

  @Column()
  @ApiProperty({ description: '공연 소개' })
  explain: string;

  @Column('timestamp')
  @ApiProperty({ description: '공연 시작 시간' })
  startTime: Date;

  @Column('timestamp')
  @ApiProperty({ description: '공연 종료 시간' })
  endTime: Date;

  @Column()
  @ApiProperty({ description: '공연 장소' })
  location: string;

  @Column()
  @ApiProperty({ description: '공연 좌석 수' })
  seat: number;

  @Column({ nullable: true })
  @ApiProperty({ description: '공연 이미지 URL' })
  img_url: string;

  @Column({ nullable: true })
  @ApiProperty({ description: '공연 카테고리' })
  category: string;

  @Column()
  @ApiProperty({ description: '공연 가격' })
  price: number;

  @OneToMany(() => Reservation, (reservation) => reservation.show)
  reservations: Reservation[];
}
