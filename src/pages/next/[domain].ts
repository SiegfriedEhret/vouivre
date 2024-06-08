import type { APIRoute } from "astro";
import { getCurrentRow, getRows } from "../../lib/database.ts";

export const GET: APIRoute = async ({ params, redirect }) => {
  const domain = `https://${params.domain}`;

  const current = await getCurrentRow(domain);

  if (!current) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const entries = await getRows(current.index + 1, 1);

  return redirect(entries[entries.length - 1].domain);
};
