import { serve } from "https://deno.land/std@0.120.0/http/server.ts";
import { randomMarketingSentence } from './mod.ts';

function handler(req: Request): Response {
  return new Response(randomMarketingSentence());
}

console.log("Listening on http://localhost:8000");
await serve(handler);
