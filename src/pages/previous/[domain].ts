import type { APIRoute } from "astro";
import { countRows, getCurrentRow, getRows } from "../../lib/database.ts";

export const GET: APIRoute = async ({ params, redirect }) => {
  const domain = `https://${params.domain}`;
  console.log(domain);

  const total = await countRows();

  const current = await getCurrentRow(domain);

  if (!current) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const entries = await getRows(current.index - 1, total);

  return redirect(entries[0].domain);
};
