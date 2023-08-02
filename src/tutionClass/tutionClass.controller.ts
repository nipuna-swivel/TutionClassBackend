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
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Tution Class API')
@Controller('tutionClass')
export class TutionClassController {
  constructor(private readonly tutionClassService: TutionClassService) {}
  @Post()
  @ApiOperation({ summary: 'create a class record' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64c3d35c6fdcbfcfa16e8312',
          description: 'this is unique automatically generated',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'this is the name of the institute',
        },
        day: {
          type: 'string',
          example: 'Tuesdays',
          description: 'weekday that calss will be held',
        },
        time: {
          type: 'string',
          example: '3PM',
          description: 'class time',
        },
        fee: {
          type: 'string',
          example: '1200LKR',
          description: 'class fees',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'saved...',
  })
  @ApiResponse({
    status: 403,
    description: 'Fobidden',
  })
  create(@Body() createTutionClassDto: CreateTutionClassDto) {
    return this.tutionClassService.create(createTutionClassDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get()
  @ApiOperation({ summary: 'Get all class location lists' })
  @ApiResponse({ status: 200, description: 'All details list of institutes' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  findAll() {
    return this.tutionClassService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get(':id')
  @ApiOperation({ summary: 'get one class location using id' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  findOne(@Param('id') id: string) {
    return this.tutionClassService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Put(':id')
  @ApiOperation({ summary: 'Update class location record' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64c3d35c6fdcbfcfa16e8312',
          description: 'this is unique automatically generated',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'this is the name of the institute',
        },
        day: {
          type: 'string',
          example: 'Tuesdays',
          description: 'weekday that calss will be held',
        },
        time: {
          type: 'string',
          example: '3PM',
          description: 'class time',
        },
        fee: {
          type: 'string',
          example: '1200LKR',
          description: 'class fees',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'updated successfully',
  })
  @ApiResponse({
    status: 403,
    description: 'Fobidden',
  })
  update(
    @Param('id') id: string,
    @Body() updateTutionClassDto: UpdateTutionClassDto,
  ) {
    return this.tutionClassService.update(id, updateTutionClassDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Delete(':id')
  @ApiOperation({ summary: 'delete the record' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'deleted the record',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  remove(@Param('id') id: string) {
    return this.tutionClassService.remove(id);
  }
}
