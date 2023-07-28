import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTutionClassDto {
  @IsString()
  @IsNotEmpty()
  classLocation: string;

  @IsString()
  @IsNotEmpty()
  Day: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  fee: string;
}
