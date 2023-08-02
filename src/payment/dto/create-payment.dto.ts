import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  studentNic: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  month: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  classLocation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  amount: string;

  @IsNotEmpty()
  @ApiProperty()
  date: Date;
}
