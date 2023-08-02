import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//for create admin
@ApiTags('User API')
@Controller('user')
export class UserController {
  constructor(private readonly adminService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'create user' })
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
          example: 'thanuja perera',
          description: 'this is the name of the user',
        },
        username: {
          type: 'string',
          example: 'thanu',
          description: 'username for login',
        },
        password: {
          type: 'string',
          example: 'thanu@123',
          description: 'password for login',
        },
        email: {
          type: 'string',
          example: 'thanu@gmail.com',
          description: 'email address for verification',
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
  createAdmin(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }
}
