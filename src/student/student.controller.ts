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
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Student API')
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post()
  @ApiOperation({ summary: 'create a student record' })
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
        name: {
          type: 'string',
          example: 'Thanuja Perea',
          description: 'this is the name of the student',
        },
        nic: {
          type: 'string',
          example: '931254675v',
          description: 'this is the national identity number',
        },
        school: {
          type: 'string',
          example: 'Mahamaya Girls collage',
          description: 'name of the school',
        },
        contactNo: {
          type: 'string',
          example: '0778656432',
          description: 'mobile number',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'name of the institute',
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
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get()
  @ApiOperation({ summary: 'Get all details list of student' })
  @ApiResponse({ status: 200, description: 'All details list of student' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  findAll() {
    return this.studentService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get(':id')
  @ApiOperation({ summary: 'Get one record using id' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Put(':id')
  @ApiOperation({ summary: 'update the record' })
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
          description: 'this is unique id',
        },
        name: {
          type: 'string',
          example: 'Thanuja Perera',
          description: 'this is the name',
        },
        nic: {
          type: 'string',
          example: '865645345v',
          description: 'this is the nic number',
        },
        school: {
          type: 'string',
          example: 'Vishaka collage',
          description: 'this is the school name',
        },
        contactNo: {
          type: 'string',
          example: '865645345v',
          description: 'this is the contact number',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'this is the class location',
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
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
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
    return this.studentService.remove(id);
  }
}
