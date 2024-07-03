import { IsEmail, IsNotEmpty, IsString, MaxLength , } from 'class-validator';
// import {
//   Employee
// } from "../interface/employee.entity";
export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  FirstName: string;

  @IsString()
  @IsNotEmpty()
  SurName: string;

  @IsString()
  @IsNotEmpty()
  Designation: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  Email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  Address: string;

  @IsString()
  @IsNotEmpty()
  Salary: string;

  @IsString()
  @IsString()
  Gender: string;
}
