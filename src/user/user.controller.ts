import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

//for create admin
@ApiTags('User API')
@Controller('user')
export class UserController {
  constructor(private readonly adminService: UserService) {}

  @Post()
  createAdmin(@Body() createUserDto: CreateUserDto) {
    return this.adminService.createUser(createUserDto);
  }
}
