import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TutionClassDocument = HydratedDocument<TutionClass>;

@Schema()
export class TutionClass {
  @Prop({ required: true })
  classLocation: string;
  @Prop({ required: true })
  time: string;
  @Prop({ required: true })
  grade: string;
  @Prop({ required: true })
  amount: string;
}

export const TutionClassSchema = SchemaFactory.createForClass(TutionClass);
