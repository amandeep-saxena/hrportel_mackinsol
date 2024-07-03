import { Document } from 'mongoose';

export interface Employee extends Document {
// export class Employee extends Document {
   FirstName: string;
   SurName: string;
   Designation: string;
   Email: string;
   Address: string;
   Salary: string;
   Gender: string;
}
