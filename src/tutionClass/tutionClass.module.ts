import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TutionClassController } from './tutionClass.controller';
import { TutionClassService } from './tutionClass.service';
import { TutionClass, TutionClassSchema } from './schema/tutionClass.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TutionClass.name, schema: TutionClassSchema },
    ]),
  ],
  exports: [TutionClassService],
  controllers: [TutionClassController],
  providers: [TutionClassService],
})
export class TutionClassModule {}
