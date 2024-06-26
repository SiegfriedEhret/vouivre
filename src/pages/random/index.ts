import type { APIRoute } from "astro";
import { getRandomRow } from "../../lib/database.ts";

export const GET: APIRoute = async ({ redirect }) => {
  const entries = await getRandomRow();

  return redirect(entries[0].domain);
};
