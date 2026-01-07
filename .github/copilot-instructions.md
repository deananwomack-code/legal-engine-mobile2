# GitHub Copilot Instructions - Legal Engine Mobile

## Project Overview
This is a React + TypeScript + Vite web application for a legal assistance tool, built with shadcn/ui components and Tailwind CSS.

## Tech Stack
- **Framework**: React 18 with Vite
- **Language**: TypeScript (strict mode relaxed for rapid prototyping)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack React Query
- **Backend**: Supabase
- **Routing**: React Router DOM

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Prefer type inference where obvious
- Use interfaces for object shapes, types for unions/intersections
- File extensions: `.tsx` for components, `.ts` for utilities
- Path aliases: Use `@/` prefix for src imports (configured in tsconfig)
- Convert empty interfaces that extend a single type to type aliases (ESLint rule)

### React
- Use functional components with hooks
- Prefer named exports for components
- Use React Hook Form with Zod for form validation
- Use Radix UI components (via shadcn/ui) for accessible UI primitives
- Follow React Hooks rules (enforced by eslint-plugin-react-hooks)

### Styling
- Use Tailwind CSS utility classes
- Follow shadcn/ui component patterns
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Prefer Tailwind utilities over custom CSS

### Code Organization
- Components: `/src/components/ui/` for shadcn components, `/src/components/` for custom
- Pages: `/src/pages/` for route components
- Hooks: `/src/hooks/` for custom React hooks
- Utils: `/src/lib/` for utility functions
- Integrations: `/src/integrations/` for third-party service integrations

### Linting & Formatting
- Follow ESLint configuration in `eslint.config.js`
- ES modules only (type: "module" in package.json)
- No unused imports
- React refresh component export rules apply

## Security & Best Practices
- Never commit secrets, API keys, or passwords
- Use environment variables for configuration (.env file)
- Validate all user inputs with Zod schemas
- Use Supabase RLS (Row Level Security) for data access control
- Follow accessibility best practices (use semantic HTML, ARIA attributes)

## Documentation
- Add JSDoc comments for complex functions or non-obvious logic
- Keep component props typed with TypeScript interfaces
- Update README.md when adding significant features
