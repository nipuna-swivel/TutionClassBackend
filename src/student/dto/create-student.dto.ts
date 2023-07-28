import { IsNotEmpty, IsString } from 'class-validator';
export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nic: string;

  birthDate: Date;

  school: string;

  @IsString()
  @IsNotEmpty()
  contactNo: string;

  joinedDate: Date;
}
