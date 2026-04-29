import { Model } from '@nozbe/watermelondb'
import { field, text, date } from '@nozbe/watermelondb/decorators'

export class Expense extends Model {
  static table = 'expenses'

  @field('amount') amount!: number
  @text('category') category!: string
  @text('title') title!: string
  @text('description') description!: string
  @field('is_monthly') isMonthly!: boolean
}

export class Income extends Model {
  static table = 'incomes'

  @field('amount') amount!: number
  @text('category') category!: string
  @text('title') title!: string
  @text('description') description!: string
  @text('source') source!: string
  @field('is_monthly') isMonthly!: boolean
}

export class Investment extends Model {
  static table = 'investments'

  @field('amount') amount!: number
  @text('category') category!: string
  @text('description') description!: string
}

export class Task extends Model {
  static table = 'tasks'

  @text('title') title!: string
  @text('description') description!: string
  @text('status') status!: string
  @date('due_date') dueDate!: Date
  @date('completed_at') completedAt!: Date | null
  @date('started_at') startedAt!: Date | null
}

export class Reminder extends Model {
  static table = 'reminders'

  @text('title') title!: string
  @text('description') description!: string
  @date('remind_at') remindAt!: Date
}

export class User extends Model {
  static table = 'users'

  @text('first_name') firstName!: string
  @text('last_name') lastName!: string
  @text('email') email!: string
  @field('best_streak') bestStreak!: number
  @field('current_streak') currentStreak!: number
}
