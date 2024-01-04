import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { Show } from './entities/show.entity';
import { RolesGuard } from 'src/user/guard/roles.guard';
import { Roles } from '../user/decorator/roles.decorator';
import { Role } from 'src/user/userRole.type';
import { addHours } from 'date-fns';
import {
  ApiQuery,
  ApiTags,
  ApiParam,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('show')
@Controller('show')
export class ShowController {
  constructor(private readonly showService: ShowService) {}

  @Roles(Role.Admin)
  @Post()
  @UseGuards(RolesGuard)
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateShowDto })
  @ApiBearerAuth()
  @ApiOperation({ summary: '공연 생성 API', description: '공연을 생성한다.' })
  @ApiCreatedResponse({ description: 'Show registration successful' })
  async registerShow(@Body() createShowDto: CreateShowDto): Promise<object> {
    createShowDto.endTime = addHours(createShowDto.endTime, 9);
    createShowDto.startTime = addHours(createShowDto.startTime, 9);

    if (createShowDto.endTime <= createShowDto.startTime) {
      throw new BadRequestException('begin is same to end or later than end');
    }
    return await this.showService.registerShow(createShowDto);
  }

  //query받자
  @Get('/all')
  @ApiQuery({ name: 'search', required: false })
  @ApiOperation({
    summary: '공연 검색 API',
    description: '공연을 검색한다.',
  })
  async findAll(@Query('search') search?: string): Promise<Show[]> {
    return await this.showService.findAll(search);
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Show ID' })
  @ApiOperation({
    summary: '공연 상세 보기 API',
    description: '공연에 대한 상세 정보를 본다.',
  })
  async getDetailInfo(@Param('id') id: number): Promise<object> {
    return await this.showService.getDetailInfo(id);
  }
}
