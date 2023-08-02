import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiExtraModels,
  getSchemaPath,
  ApiOperation,
} from '@nestjs/swagger';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credentiol.dto';
import { LoginResponse } from '../swagger-options';

@ApiTags('Auth API')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiOperation({ summary: 'Login api end point' })
  @ApiExtraModels(AuthCredentialDto)
  @ApiBody({
    schema: {
      $ref: getSchemaPath(AuthCredentialDto),
    },
  })
  @ApiResponse(LoginResponse)
  async signIn(@Body() signInDto: AuthCredentialDto) {
    return await this.authService.signIn(signInDto);
  }

  @Post()
  createAdmin(@Body() signupDto: AuthCredentialDto) {
    return this.authService.createUser(signupDto);
  }
}
