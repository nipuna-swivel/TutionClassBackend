import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentSchema } from './schema/student.schema';
import { StudentModule } from './student.module';

describe('StudentService', () => {
  let service: StudentService;
  let model: Model<StudentModule>;

  const studentDocument = {
    _id: '611f3192e17b792a06b004bf',
    name: 'example name',
    nic: 'example nic',
    school: 'example school',
    contactNo: 'example contact number',
    classLocation: 'example class location',
  } as StudentSchema;

  const exampleCreateDTO = {
    name: 'example name',
    nic: 'example nic',
    school: 'example school',
    contactNo: 'example contact number',
    classLocation: 'example class location',
  } as CreateStudentDto;

  const exampleUpdateDTO = {
    name: 'example name',
    nic: 'example nic',
    school: 'example school',
    contactNo: 'example contact number',
    classLocation: 'example class location',
  } as UpdateStudentDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getModelToken('Example'),
          useValue: {
            new: jest.fn().mockResolvedValue(studentDocument),
            constructor: jest.fn().mockResolvedValue(studentDocument),
            findOne: jest.fn().mockResolvedValue(studentDocument),
            find: jest.fn().mockResolvedValue([studentDocument]),
            create: jest.fn().mockResolvedValue(studentDocument),
            findByIdAndUpdate: jest.fn().mockResolvedValue(studentDocument),
            findByIdAndRemove: jest.fn().mockResolvedValue(studentDocument),
          },
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
    model = module.get<Model<StudentSchema>>(getModelToken('Example'));
  });

  describe('findAll', () => {
    it('should return an array of example documents', async () => {
      const result = await service.findAll();
      expect(result).toEqual([studentDocument]);
    });
  });

  describe('findOne', () => {
    it('should return an example document', async () => {
      const result = await service.findOne('611f3192e17b792a06b004bf');
      expect(result).toEqual(studentDocument);
    });
  });

  describe('create', () => {
    it('should create and return an example document', async () => {
      const result = await service.create(exampleCreateDTO);
      expect(model.create).toHaveBeenCalledWith(exampleCreateDTO);
      expect(result).toEqual(studentDocument);
    });
  });

  describe('update', () => {
    it('should update and return an example document', async () => {
      const result = await service.update(
        '611f3192e17b792a06b004bf',
        exampleUpdateDTO,
      );
      expect(model.findByIdAndUpdate).toHaveBeenCalledWith(
        '611f3192e17b792a06b004bf',
        exampleUpdateDTO,
        { new: true },
      );
      expect(result).toEqual(studentDocument);
    });
  });

  describe('delete', () => {
    it('should delete and return an example document', async () => {
      const result = await service.remove('611f3192e17b792a06b004bf');
      expect(model.findByIdAndRemove).toHaveBeenCalledWith(
        '611f3192e17b792a06b004bf',
      );
      expect(result).toEqual(studentDocument);
    });
  });
});
