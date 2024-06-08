import { count, db, eq, or, Sites, sql } from "astro:db";

export async function countRows() {
  const [{ total }] = await db
    .select({
      total: count(),
    })
    .from(Sites);

  return total;
}

export async function getCurrentRow(domain: string) {
  const [current] = await db
    .select()
    .from(Sites)
    .where(eq(Sites.domain, domain));

  return current;
}

export async function getRows(index1: number, index2: number) {
  return db
    .select()
    .from(Sites)
    .where(or(eq(Sites.index, index1), eq(Sites.index, index2)))
    .orderBy(Sites.index);
}

export async function getRandomRow() {
  return db
    .select()
    .from(Sites)
    .orderBy(sql`random()`)
    .limit(1);
}
