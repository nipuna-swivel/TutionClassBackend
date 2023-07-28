import { IsNotEmpty, IsString } from 'class-validator';
export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  studentNic: string;

  @IsString()
  @IsNotEmpty()
  month: string;

  @IsString()
  classLocation: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  date: Date;
}
