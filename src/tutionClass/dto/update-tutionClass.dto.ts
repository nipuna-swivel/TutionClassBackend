import { PartialType } from '@nestjs/mapped-types';
import { CreateTutionClassDto } from './create-tutionClass.dto';

export class UpdateTutionClassDto extends PartialType(CreateTutionClassDto) {}
