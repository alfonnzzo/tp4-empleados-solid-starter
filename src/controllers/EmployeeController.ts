import { Request, Response } from 'express';
import { EmployeeService } from '../services/EmployeeService.js';

export class EmployeeController {
  constructor(private readonly service: EmployeeService) {}

  create = async (req: Request, res: Response): Promise<void> => {
    const { name, position, baseSalary, yearsOfService } = req.body;
    const employee = await this.service.create({ name, position, baseSalary, yearsOfService });
    res.status(201).json(employee);
  };

  findAll = async (_req: Request, res: Response): Promise<void> => {
    const employees = await this.service.findAll();
    res.json(employees);
  };

  findById = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const employee = await this.service.findById(req.params.id);
    res.json(employee);
  };
}
