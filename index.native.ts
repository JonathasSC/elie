import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import migrations from './model/migrations'
import schema from './model/schema'
import { Expense, Income, Investment, Task, Reminder, User } from './model/models'

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (_error: Error) => {
    // Database failed to load -- offer the user to reload the app or log out
  },
})

const database = new Database({
  adapter,
  modelClasses: [Expense, Income, Investment, Task, Reminder, User],
})

export default database
