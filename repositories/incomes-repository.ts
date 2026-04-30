import database from "@/index.native";
import { Income } from "@/model/models";

type IncomeData = {
  amount: number;
  category: string;
  title: string;
  description?: string;
  source?: string;
  isMonthly: boolean;
};

export class IncomesRepository {
  private collection = database.get<Income>("incomes");

  async findAll(): Promise<Income[]> {
    return this.collection.query().fetch();
  }

  async findById(id: string): Promise<Income> {
    return this.collection.find(id);
  }

  async create(data: IncomeData): Promise<Income> {
    return database.write(async () => {
      return this.collection.create((expense) => {
        expense.amount = data.amount;
        expense.category = data.category;
        expense.title = data.title;
        expense.description = data.description ?? "";
        expense.source = data.source ?? "";
        expense.isMonthly = data.isMonthly;
      });
    });
  }

  async update(id: string, data: Partial<IncomeData>): Promise<Income> {
    return database.write(async () => {
      const expense = await this.collection.find(id);
      return expense.update((e) => {
        if (data.amount !== undefined) e.amount = data.amount;
        if (data.category !== undefined) e.category = data.category;
        if (data.title !== undefined) e.title = data.title;
        if (data.description !== undefined) e.description = data.description;
        if (data.source !== undefined) e.source = data.source;
        if (data.isMonthly !== undefined) e.isMonthly = data.isMonthly;
      });
    });
  }

  async delete(id: string): Promise<void> {
    return database.write(async () => {
      const expense = await this.collection.find(id);
      await expense.destroyPermanently();
    });
  }
}

export const incomesRepository = new IncomesRepository();
