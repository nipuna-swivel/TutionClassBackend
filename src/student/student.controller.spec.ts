import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { NotFoundException } from '@nestjs/common';

describe('StudentController', () => {
  let controller: StudentController;
  let service: StudentService;

  const mockStudent = [
    {
      _id: '640071k2fx9566hf5fa595a9',
      name: 'Thanuja',
      nic: '921345987v',
      school: 'Vishaka Vidyalaya',
      contactNo: '0112345654',
      classLocation: 'Rotary',
    },
    {
      _id: '640071o2fx9p66hf5fa595a9',
      name: 'Sapna',
      nic: '965456786v',
      school: 'Saint Anne convent',
      contactNo: '0112345654',
      classLocation: 'Sasip',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  describe('findAll', () => {
    it('should return an array of students', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValue(mockStudent);

      const result = await controller.findAll();

      expect(result).toEqual(mockStudent);
    });
  });

  describe('findOne', () => {
    it('should return a student', async () => {
      const user = mockStudent[0];
      jest.spyOn(service, 'findOne').mockResolvedValue(user);

      const result = await controller.findOne(user._id);

      expect(result).toEqual(user);
    });

    it('should throw NotFoundException when student is not found', async () => {
      const id = '740071k2fa9566hf5fa595am';
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(controller.findOne(id)).rejects.toThrow(NotFoundException);
    });
  });

  describe('create', () => {
    it('should return the created student', async () => {
      const userDto: CreateStudentDto = {
        name: 'Thanuja',
        nic: '921345987v',
        school: 'Vishaka Vidyalaya',
        contactNo: '0112345654',
        classLocation: 'Rotary',
      };
      const createdStudent = {
        id: '749971k2fa9566hf5fa595xx',
        name: 'Thanuja',
        nic: '921345987v',
        school: 'Vishaka Vidyalaya',
        contactNo: '0112345654',
        classLocation: 'Rotary',
      };
      jest.spyOn(service, 'create').mockResolvedValue(createdStudent);

      const result = await controller.create(userDto);

      expect(result).toEqual(createdStudent);
    });
  });

  describe('update', () => {
    it('should return the updated student', async () => {
      const userDto: UpdateStudentDto = {
        name: 'Thanuja',
        nic: '921345987v',
        school: 'Vishaka Vidyalaya',
        contactNo: '0112345654',
        classLocation: 'Rotary',
      };
      const updatedStudent = {
        _id: '749971k2fa9566hf5fa595xx',
        name: 'Thanuja',
        nic: '921345987v',
        school: 'Vishaka Vidyalaya',
        contactNo: '0112345654',
        classLocation: 'Sasip',
      };
      jest.spyOn(service, 'update').mockResolvedValue(updatedStudent);

      const result = await controller.update(
        '749971k2fa9566hf5fa595xx',
        userDto,
      );

      expect(result).toEqual(updatedStudent);
    });

    it('should throw NotFoundException when student is not found', async () => {
      const id = '740071k2fa9566hf5fa595am';
      const userDto: UpdateStudentDto = { name: 'Bob' };
      jest.spyOn(service, 'update').mockResolvedValue(null);

      await expect(controller.update(id, userDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should return the removed student', async () => {
      const removedStudent = {
        _id: '749971k2fa9566hf5fa595xx',
        name: 'Thanuja',
        nic: '921345987v',
        school: 'Vishaka Vidyalaya',
        contactNo: '0112345654',
        classLocation: 'Rotary',
      };
      jest.spyOn(service, 'remove').mockResolvedValue(removedStudent);

      const result = await controller.remove('740071k2fa9566hf5fa595am');

      expect(result).toEqual(removedStudent);
    });

    it('should throw NotFoundException when student is not found', async () => {
      const id = '740071k2fa9566hf5fa595am';
      jest.spyOn(service, 'remove').mockResolvedValue(null);

      await expect(controller.remove(id)).rejects.toThrow(NotFoundException);
    });
  });
});
