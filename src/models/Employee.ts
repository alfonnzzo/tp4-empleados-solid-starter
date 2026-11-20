import { HydratedDocument, Schema, model } from 'mongoose';

export interface EmployeeData {
  name: string;
  position: string;
  baseSalary: number;
  yearsOfService: number;
  finalSalary: number;
}

export type EmployeeDocument = HydratedDocument<EmployeeData>;

const employeeSchema = new Schema<EmployeeData>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    baseSalary: { type: Number, required: true },
    yearsOfService: { type: Number, required: true },
    finalSalary: { type: Number, required: true }
  },
  { timestamps: true }
);

export const EmployeeModel = model<EmployeeData>('Employee', employeeSchema);
