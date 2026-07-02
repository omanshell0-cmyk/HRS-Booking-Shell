Netlify Functions deployment notes

This project includes Netlify Functions in `netlify/functions/` that replicate the previous `server.js` endpoints.

Important persistence note
- Netlify Functions cannot reliably persist files on the function host filesystem across invocations in production. The included functions read and write JSON files in a local `data/` folder which works for local development with `netlify dev` or for simple single-instance hosts, but is not reliable as production storage.

Recommended production setups
- Use a managed database or storage service (Supabase, Firebase, DynamoDB, Airtable) and modify the functions to use that service.

Deploy steps (basic)
1. Push repo to GitHub.
2. On Netlify, create a new site from the repo.
3. Netlify will build and deploy functions automatically.
4. For local testing: install `netlify-cli` and run `netlify dev`.

If you want, I can:
- Rework the functions to use Supabase (I'll need a Supabase project URL and anon key), or
- Provide deployment instructions for Render (simpler for file-backed storage).
