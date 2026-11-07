# postgrest-js: maybeSingle() on a multi-row delete returns PGRST116 but the delete is committed

Reproduction for https://github.com/supabase/supabase-js/issues/2834

```sh
docker compose up -d   # PostgreSQL 16 + PostgREST 16.5 on port 53000
npm install
npm run repro
```

Output with @supabase/postgrest-js 2.119.0:

```
maybeSingle(): status 406, PGRST116, rows left: []
single(): status 406, PGRST116, rows left: [{"id":1},{"id":2}]
```

Both calls return the same error, but with `maybeSingle()` both rows were deleted, while `single()` rolled the delete back.
