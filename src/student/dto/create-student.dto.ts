import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nic: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  school: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  contactNo: string;

  @IsString()
  @IsNotEmpty()
  classLocation: string;
}
