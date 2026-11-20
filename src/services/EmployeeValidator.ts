import { ValidationError } from '../errors/AppError.js';

export interface CreateEmployeeInput {
  name: string;
  position: string;
  baseSalary: number;
  yearsOfService: number;
}

export class EmployeeValidator {
  validateCreate(input: CreateEmployeeInput): void {
    const { name, position, baseSalary, yearsOfService } = input;

    if (!name || !position) {
      throw new ValidationError('Nombre y puesto son obligatorios');
    }

    if (typeof baseSalary !== 'number' || baseSalary <= 0) {
      throw new ValidationError('El salario base debe ser mayor a 0');
    }

    if (
      typeof yearsOfService !== 'number' ||
      yearsOfService < 0 ||
      !Number.isInteger(yearsOfService)
    ) {
      throw new ValidationError('La antigüedad debe ser un entero mayor o igual a 0');
    }
  }
}
