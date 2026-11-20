import { drizzle } from 'drizzle-orm/libsql'
import * as schema from '../db/schema'

export const db = drizzle({
  connection: {
    url: process.env.NUXT_DATABASE_URL || 'file:local.db',
  },
  casing: 'snake_case',
})

export const tables = schema
