import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateTutionClassDto } from './dto/create-tutionClass.dto';
import { TutionClassService } from './tutionClass.service';
import { UpdateTutionClassDto } from './dto/update-tutionClass.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Tution Class API')
@Controller('tutionClass')
export class TutionClassController {
  constructor(private readonly tutionClassService: TutionClassService) {}
  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  create(@Body() createTutionClassDto: CreateTutionClassDto) {
    return this.tutionClassService.create(createTutionClassDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get()
  findAll() {
    return this.tutionClassService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutionClassService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTutionClassDto: UpdateTutionClassDto,
  ) {
    return this.tutionClassService.update(id, updateTutionClassDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutionClassService.remove(id);
  }
}
