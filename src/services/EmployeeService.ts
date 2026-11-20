import { NotFoundError } from '../errors/AppError.js';
import { EmployeeDocument } from '../models/Employee.js';
import { EmployeeRepository } from '../repositories/EmployeeRepository.js';
import { EmployeeValidator, CreateEmployeeInput } from './EmployeeValidator.js';
import { SalaryCalculator } from './SalaryCalculator.js';

export class EmployeeService {
  constructor(
    private readonly repository: EmployeeRepository,
    private readonly validator: EmployeeValidator,
    private readonly salaryCalculator: SalaryCalculator
  ) {}

  async create(input: CreateEmployeeInput): Promise<EmployeeDocument> {
    this.validator.validateCreate(input);

    const finalSalary = this.salaryCalculator.calculateFinalSalary(
      input.baseSalary,
      input.yearsOfService
    );

    const employee = await this.repository.create({
      name: input.name,
      position: input.position,
      baseSalary: input.baseSalary,
      yearsOfService: input.yearsOfService,
      finalSalary
    });

    console.log(`Empleado creado: ${employee.name} - salario final: ${employee.finalSalary}`);
    return employee;
  }

  async findAll(): Promise<EmployeeDocument[]> {
    return this.repository.findAll();
  }

  async findById(id: string): Promise<EmployeeDocument> {
    const employee = await this.repository.findById(id);

    if (!employee) {
      throw new NotFoundError('Empleado no encontrado');
    }

    return employee;
  }
}
