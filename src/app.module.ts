import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeSchema } from './schema/employee.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'Employeedb',
    }),
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class AppModule {}
