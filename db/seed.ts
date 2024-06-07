import { db, Sites } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Sites).values([
    {
      uuid: crypto.randomUUID(),
      order: 1,
      name: "Siegfried Ehret",
      domain: "https://ehret.me",
    },
    {
      uuid: crypto.randomUUID(),
      order: 2,
      name: "Siegfried Ehret",
      domain: "https://sieg.fr",
    },
  ]);
}
