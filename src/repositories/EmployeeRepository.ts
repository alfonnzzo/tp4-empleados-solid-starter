import { EmployeeData, EmployeeDocument } from '../models/Employee.js';

export interface EmployeeRepository {
  create(data: EmployeeData): Promise<EmployeeDocument>;
  findAll(): Promise<EmployeeDocument[]>;
  findById(id: string): Promise<EmployeeDocument | null>;
}
