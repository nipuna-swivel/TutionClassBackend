import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  birthday: Date;
  @Prop({ required: true })
  school: string;
  @Prop({ required: true })
  contactNo: string;
  @Prop({ required: true })
  classLocation: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
