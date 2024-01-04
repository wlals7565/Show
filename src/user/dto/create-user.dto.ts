import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty({ description: '이메일' })
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty({ description: '비밀번호' })
  readonly password: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @ApiProperty({ description: '비밀번호 재확인' })
  readonly passwordConfirm: string;
}
