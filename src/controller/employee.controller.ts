import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  HttpStatus,
  HttpException,
  Param,
  Put,
  HttpCode,
  Delete,
} from '@nestjs/common';
import { Response, response } from 'express';
import { EmployeeService } from '../employee/employee.service'; // Adjust path as necessary
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @Res() response: Response,
  ): Promise<any> {
    try {
      console.log('Received DTO:', createEmployeeDto);
      const createdEmployee =
        await this.employeeService.create(createEmployeeDto);
      return response.status(HttpStatus.CREATED).json({
        data: createdEmployee,
        message: 'Employee created successfully',
      });
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Error: Employee not created',
          message: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  l;

  @Get()
  async getAllEmpolyee(@Res() response): Promise<any> {
    try {
      const findData = await this.employeeService.getAllEmpolyee();
      return response.status(HttpStatus.OK).json({
        message: 'All students data found successfully',
        findData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getEmpolyeeById(@Res() response, @Param('id') Id: string) {
    try {
      const findData = await this.employeeService.getEmpolyeeById(Id);
      return response.status(HttpStatus.OK).json({
        message: 'Student found successfully',
        findData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:Id')
  async updateEmpData(
    @Res() response,
    @Param('Id') Id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    try {
      const updateData = await this.employeeService.updateEmpData(
        Id,
        updateEmployeeDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Employee has been successfully updated',
        updateData,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to update employee',
        error: error.message,
      });
    }
  }

  @Post('/:Id')
  async deleteEmployessData(@Res() response, @Param('Id') Id: string) {
    try {
      const deletedDATA = await this.employeeService.deleteEmployessData(Id);
      return response.status(HttpStatus.OK).json({
        message: 'Employee has been delete',
        deletedDATA,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Failed to udate employee',
        error: error.message,
      });
    }
  }
}
