import { EmployeeData, EmployeeDocument, EmployeeModel } from '../models/Employee.js';
import { EmployeeRepository } from './EmployeeRepository.js';

export class MongoEmployeeRepository implements EmployeeRepository {
  async create(data: EmployeeData): Promise<EmployeeDocument> {
    return EmployeeModel.create(data);
  }

  async findAll(): Promise<EmployeeDocument[]> {
    return EmployeeModel.find().sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<EmployeeDocument | null> {
    return EmployeeModel.findById(id);
  }
}
