import { column, defineDb, defineTable, NOW } from "astro:db";

export const Sites = defineTable({
  columns: {
    uuid: column.text({ primaryKey: true }),
    order: column.number({ unique: true }),
    name: column.text(),
    domain: column.text({ unique: true }),
    added: column.date({ default: NOW }),
  },
  indexes: [{ on: ["order", "domain"], unique: true }],
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Sites,
  },
});
