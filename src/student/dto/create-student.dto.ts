import { IsNotEmpty, IsString } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nic: string;

  @IsString()
  school: string;

  @IsString()
  @IsNotEmpty()
  contactNo: string;

  @IsString()
  classLocation: string;
}
