import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
