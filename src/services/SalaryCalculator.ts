export interface SalaryCalculator {
  calculateFinalSalary(baseSalary: number, yearsOfService: number): number;
}

export class SeniorityBonusSalaryCalculator implements SalaryCalculator {
  private readonly bonusRatePerYear = 0.02;

  calculateFinalSalary(baseSalary: number, yearsOfService: number): number {
    const bonus = baseSalary * this.bonusRatePerYear * yearsOfService;
    return baseSalary + bonus;
  }
}
