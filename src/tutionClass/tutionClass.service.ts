import { Injectable } from '@nestjs/common';
import { CreateTutionClassDto } from './dto/create-tutionClass.dto';
import { UpdateTutionClassDto } from './dto/update-tutionClass.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TutionClass, TutionClassDocument } from './schema/tutionClass.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TutionClassService {
  constructor(
    @InjectModel(TutionClass.name)
    private tutionClassModel: Model<TutionClassDocument>,
  ) {}

  async create(
    createTutionClassDto: CreateTutionClassDto,
  ): Promise<TutionClass> {
    try {
      const createdTutionClass = new this.tutionClassModel(
        createTutionClassDto,
      );

      return createdTutionClass.save();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findAll() {
    try {
      return this.tutionClassModel.find();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findOne(id: string) {
    try {
      return this.tutionClassModel.findById(id);
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async update(id: string, updateTutionClassDto: UpdateTutionClassDto) {
    try {
      return this.tutionClassModel.updateOne(
        { _id: id },
        { $set: { ...updateTutionClassDto } },
      );
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async remove(id: string) {
    try {
      return this.tutionClassModel.deleteOne({ _id: id });
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }
}
