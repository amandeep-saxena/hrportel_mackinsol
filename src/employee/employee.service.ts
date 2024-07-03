import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { EmployeeDocument } from '../schema/employee.schema';
import { Employee } from '../interface/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { throwError } from 'rxjs';
// import { Employee } from 'src/schema/employee.schema';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee')
    private readonly employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  async getAllEmpolyee(): Promise<Employee[]> {
    const studentData = await this.employeeModel.find();
    if (!studentData || studentData.length == 0) {
      throw new NotFoundException('Students data not found!');
    }
    return studentData;
  }

  async getEmpolyeeById(Id: string): Promise<Employee> {
    const findData = await this.employeeModel.findById(Id).exec();
    if (!findData) {
      throw new NotFoundException(`Student #${Id} not found`);
    }
    return findData;
  }

  async updateEmpData(
    Id: string,
    updateEmployeeDto: UpdateEmployeeDto,
    // UpdateEmployeeDto,
  ): Promise<Employee> {
    const updateData = await this.employeeModel.findByIdAndUpdate(
      Id,
      updateEmployeeDto,
      { new: true },
    );
    return updateData;
  }

  async deleteEmployessData(Id: string): Promise<Employee> {
    const deleteDATA = await this.employeeModel.findByIdAndDelete(Id);

    return deleteDATA;
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Employee, EmployeeDocument } from '../schema/employee.schema';
// import { CreateEmployeeDto } from '../dto/create-employee.dto';

// @Injectable()
// export class EmployeeService {
//   constructor(
//     @InjectModel('Employee')
//     private readonly employeeModel: Model<EmployeeDocument>,
//   ) {}

//   create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeDocument> {
//     const employee = new this.employeeModel(createEmployeeDto);
//     return employee.save();
//   }
// }
