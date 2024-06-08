import { db, Sites } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Sites).values([
    {
      domain: "https://ehret.me",
      name: "Siegfried Ehret",
      index: 1,
      next: 2,
    },
    {
      domain: "https://sieg.fr",
      name: "Siegfried Ehret",
      index: 2,
      previous: 1,
    },
  ]);
}
