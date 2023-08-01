import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from './schema/payment.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name)
    private paymentModel: Model<PaymentDocument>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    try {
      const createdPayment = new this.paymentModel(createPaymentDto);

      return createdPayment.save();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findAll() {
    try {
      return this.paymentModel.find();
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async findOne(id: string) {
    try {
      return this.paymentModel.findById(id);
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    try {
      return this.paymentModel.updateOne(
        { _id: id },
        { $set: { ...updatePaymentDto } },
      );
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }

  async remove(id: string) {
    try {
      return this.paymentModel.deleteOne({ _id: id });
    } catch (error) {
      throw new BadRequestException(error.messege);
    }
  }
}
