import { column, defineDb, defineTable, NOW } from "astro:db";

export const Sites = defineTable({
  columns: {
    domain: column.text({ primaryKey: true }),
    name: column.text(),
    index: column.number({ unique: true }),
    added: column.date({ default: NOW }),
  },
  indexes: [{ on: ["domain"], unique: true }],
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Sites,
  },
});
