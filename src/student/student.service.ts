import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './schema/student.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async create(CreateStudentDto: CreateStudentDto): Promise<Student> {
    try {
      const createdStudent = new this.studentModel(CreateStudentDto);
      return createdStudent.save();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findAll() {
    try {
      return this.studentModel.find();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findOne(id: string) {
    try {
      return this.studentModel.findById(id);
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async update(id: string, updateStudentDto: UpdateStudentDto) {
    try {
      return this.studentModel.updateOne(
        { _id: id },
        { $set: { ...updateStudentDto } },
      );
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async remove(id: string) {
    try {
      return this.studentModel.deleteOne({ _id: id });
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }
}
