import express, { Express } from 'express';
import { EmployeeController } from './controllers/EmployeeController.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { MongoEmployeeRepository } from './repositories/MongoEmployeeRepository.js';
import { createEmployeeRoutes } from './routes/employeeRoutes.js';
import { EmployeeService } from './services/EmployeeService.js';
import { EmployeeValidator } from './services/EmployeeValidator.js';
import { SeniorityBonusSalaryCalculator } from './services/SalaryCalculator.js';

export function createApp(): Express {
  const repository = new MongoEmployeeRepository();
  const validator = new EmployeeValidator();
  const salaryCalculator = new SeniorityBonusSalaryCalculator();
  const service = new EmployeeService(repository, validator, salaryCalculator);
  const controller = new EmployeeController(service);

  const app = express();
  app.use(express.json());
  app.use('/employees', createEmployeeRoutes(controller));
  app.use(errorHandler);

  return app;
}
