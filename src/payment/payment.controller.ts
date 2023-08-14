import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Payment API')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post()
  @ApiOperation({ summary: 'Create a Payment record' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64c3d35c6fdcbfcfa16e8312',
          description: 'this is unique automatically generated',
        },
        studentNic: {
          type: 'string',
          example: '931245676v',
          description: 'this is the nic number that is related to the student',
        },
        month: {
          type: 'string',
          example: 'July',
          description: 'month of the payment',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'class institution',
        },
        amount: {
          type: 'string',
          example: '1200LKR',
          description: 'class fees',
        },
        date: {
          type: 'Date',
          example: '2023-07-02',
          description: 'date that payment has made',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'saved...',
  })
  @ApiResponse({
    status: 403,
    description: 'Fobidden',
  })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @ApiOperation({ summary: 'Get all payment records as list' })
  @Get()
  findAll() {
    return this.paymentService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Get(':studentNic')
  @ApiOperation({ summary: 'Get payment record using NIC' })
  @ApiParam({
    name: 'studentNic',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 500, description: 'Internal Server error' })
  findOne(@Param('studentNic') studentNic: string) {
    return this.paymentService.findOne(studentNic);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Put(':id')
  @ApiOperation({ summary: 'Update payment record' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64c3d35c6fdcbfcfa16e8312',
          description: 'this is unique automatically generated',
        },
        studentNic: {
          type: 'string',
          example: '931245676v',
          description: 'this is the nic number that is related to the student',
        },
        month: {
          type: 'string',
          example: 'July',
          description: 'month of the payment',
        },
        classLocation: {
          type: 'string',
          example: 'Rotary Nugegoda',
          description: 'class institution',
        },
        amount: {
          type: 'string',
          example: '1200LKR',
          description: 'class fees',
        },
        date: {
          type: 'Date',
          example: '2023-07-02',
          description: 'date that payment has made',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'updated successfully',
  })
  @ApiResponse({
    status: 403,
    description: 'Fobidden',
  })
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete Payment record' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'enter unique id',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'deleted the record',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden',
  })
  remove(@Param('id') id: string) {
    return this.paymentService.remove(id);
  }
}
