import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
  @Prop({ required: true })
  studentNic: string;
  @Prop({ required: true })
  month: string;
  @Prop({ required: true })
  classLocation: string;
  @Prop({ required: true })
  amount: string;
  @Prop({ required: true })
  date: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
