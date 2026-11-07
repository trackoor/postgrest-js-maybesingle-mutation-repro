import { PostgrestClient } from "@supabase/postgrest-js";

const client = new PostgrestClient("http://127.0.0.1:53000");

for (const method of ["maybeSingle", "single"]) {
  await client.from("c").delete().gte("id", 0);
  await client.from("c").insert([{ id: 1, v: "x" }, { id: 2, v: "y" }]);
  const r = await client.from("c").delete().in("id", [1, 2]).select()[method]();
  const left = (await client.from("c").select("id").order("id")).data;
  console.log(`${method}(): status ${r.status}, ${r.error?.code}, rows left: ${JSON.stringify(left)}`);
}
