---
applyTo: "**/*.{ts,tsx}"
---

# TypeScript and React Code Guidelines

## TypeScript Patterns

### Type Definitions
- Use `interface` for object shapes that might be extended
- Use `type` for unions, intersections, and mapped types
- Convert empty interfaces extending a single type to type aliases (per ESLint rule, cleaner code):
  ```typescript
  // ❌ Avoid
  interface MyProps extends BaseProps {}
  
  // ✅ Prefer
  type MyProps = BaseProps;
  ```

### Imports
- Use ES modules syntax (`import`/`export`)
- Never use `require()` in TypeScript files
- Organize imports: external libraries → internal modules → relative imports
- Use path aliases: `@/components/...` instead of `../../../components/...`

### Type Safety
- Avoid `any` type when possible, use `unknown` if type is truly unknown
- Use type guards for runtime type checking
- Leverage TypeScript's type inference - don't over-annotate

## React Component Patterns

### Component Structure
```typescript
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps extends ComponentProps<'div'> {
  // Custom props here
}

export function MyComponent({ className, ...props }: MyComponentProps) {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {/* Component content */}
    </div>
  );
}
```

### Hooks Usage
- Place hooks at the top of the component, before any conditional logic
- Custom hooks should be in `/src/hooks/` and start with `use` prefix
- Use React Query hooks for data fetching
- Use React Hook Form with Zod for complex forms

### State Management
- Prefer local state with `useState` for UI state
- Use React Query for server state
- Use Context sparingly - consider composition over context

### Event Handlers
- Name handlers with `handle` prefix: `handleClick`, `handleSubmit`
- For components that accept handler props, use `on` prefix: `onClick`, `onSubmit`

## shadcn/ui Components
- Import UI components from `@/components/ui/`
- Customize via Tailwind classes, not by modifying component files
- Use `cn()` utility for conditional styling
- Follow composition patterns from shadcn/ui documentation

## Accessibility
- Use semantic HTML elements
- Add ARIA labels for icon-only buttons
- Ensure keyboard navigation works
- Test with screen readers when possible
- Use Radix UI primitives for accessible interactive components
