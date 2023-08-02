import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateTutionClassDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  classLocation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  day: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  time: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  fee: string;
}
