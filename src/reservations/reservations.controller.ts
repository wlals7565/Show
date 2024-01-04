import { Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/decorator/get-user.decorator';
import { User } from 'src/user/entities/user.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post(':id')
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '공연 예매 API',
    description: '공연 예매를 합니다.',
  })
  @ApiBearerAuth()
  async reserve(
    @Param('id') showId: number,
    @GetUser() user: User,
  ): Promise<object> {
    return await this.reservationsService.reserve(showId, user.id);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: '내 예매 내역 API',
    description: '나의 과거 공연 예매 내역들을 봅니다.',
  })
  @ApiBearerAuth()
  async getAllMyReservationHistory(@GetUser() user: User) {
    return await this.reservationsService.getAllMyReservationHistory(user.id);
  }
}
