import database from "@/index.native";
import { Expense } from "@/model/models";

type ExpenseData = {
  amount: number;
  category: string;
  title: string;
  description?: string;
  isMonthly: boolean;
};

export class ExpensesRepository {
  private collection = database.get<Expense>("expenses");

  async findAll(): Promise<Expense[]> {
    return this.collection.query().fetch();
  }

  async findById(id: string): Promise<Expense> {
    return this.collection.find(id);
  }

  async create(data: ExpenseData): Promise<Expense> {
    return database.write(async () => {
      return this.collection.create((expense) => {
        expense.amount = data.amount;
        expense.category = data.category;
        expense.title = data.title;
        expense.description = data.description ?? "";
        expense.isMonthly = data.isMonthly;
      });
    });
  }

  async update(id: string, data: Partial<ExpenseData>): Promise<Expense> {
    return database.write(async () => {
      const expense = await this.collection.find(id);
      return expense.update((e) => {
        if (data.amount !== undefined) e.amount = data.amount;
        if (data.category !== undefined) e.category = data.category;
        if (data.title !== undefined) e.title = data.title;
        if (data.description !== undefined) e.description = data.description;
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

export const expensesRepository = new ExpensesRepository();
