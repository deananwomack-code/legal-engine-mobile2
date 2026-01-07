---
applyTo: "supabase/functions/**/*.ts"
excludeAgent: ""
---

# Supabase Edge Functions (Deno) Guidelines

## Environment
- These functions run on Deno, NOT Node.js
- Use Deno-specific imports and APIs
- Deploy via Supabase CLI, not this repository's CI/CD

## Import Patterns
- Use Deno-style imports with full URLs or npm: specifier
- Import from Supabase Deno modules:
  ```typescript
  import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
  import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
  ```

## Function Structure
- Export a single handler function
- Use `Deno.serve()` for HTTP handling
- Handle CORS properly for browser requests
- Return Response objects with appropriate headers

## Environment Variables
- Access via `Deno.env.get('VARIABLE_NAME')`
- Use Supabase secrets management
- Never commit secrets in code

## Error Handling
- Return proper HTTP status codes
- Log errors with console.error for CloudWatch
- Provide user-friendly error messages

## Testing
- Test locally with `supabase functions serve`
- Use Deno testing framework if needed
- Test CORS and authentication flows

## Security
- Validate all inputs
- Use Supabase Auth for user verification
- Implement rate limiting if needed
- Sanitize outputs to prevent XSS

## Best Practices
- Keep functions small and focused
- Use TypeScript for type safety
- Document function purpose and API
- Set appropriate timeout values
- Monitor function performance in Supabase dashboard
