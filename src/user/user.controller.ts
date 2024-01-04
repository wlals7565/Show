import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './decorator/get-user.decorator';
import { User } from './entities/user.entity';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateUserDto })
  @ApiOperation({ summary: '회원가입 API', description: '회원 가입을 합니다.' })
  async signup(@Body() createUserDto: CreateUserDto): Promise<object> {
    if (createUserDto.password == createUserDto.passwordConfirm) {
      return await this.userService.signup(createUserDto);
    } else {
      throw new BadRequestException('password not match passwordConfirm');
    }
  }

  @UsePipes(ValidationPipe)
  @Post('signin')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { email: { type: 'string' }, password: { type: 'string' } },
    },
  })
  @ApiOperation({ summary: '로그인 API', description: '로그인을 합니다.' })
  async signin(
    @Body() signinUserDto: SigninUserDto,
  ): Promise<{ accessToken: string }> {
    return await this.userService.signin(signinUserDto);
  }

  @UseGuards(AuthGuard())
  @Get('profile')
  @ApiOperation({
    summary: '내 정보 보기 API',
    description: '내 정보를 봅니다.',
  })
  async getMyProfile(@GetUser() user: User) {
    return {
      code: 200,
      message: 'you successfully get your profile',
      email: user.email,
      point: user.point,
    };
  }
}
