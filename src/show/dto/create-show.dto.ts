import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '공연 이름' })
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '공연 소개' })
  readonly explain: string;

  @IsNotEmpty()
  @ApiProperty({ description: '공연 시작 시간' })
  startTime: Date;

  @IsNotEmpty()
  @ApiProperty({ description: '공연 종료 시간' })
  endTime: Date;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '공연 장소' })
  readonly location: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(50)
  @Max(100)
  @ApiProperty({ description: '공연 좌석 수' })
  readonly seat: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '공연 이미지 URL' })
  readonly img_url: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: '공연 카테고리' })
  readonly category: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(10000)
  @Max(50000)
  @ApiProperty({ description: '공연 예매 가격' })
  readonly price: number;
}
