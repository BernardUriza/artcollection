# Art Collection - Claude Instructions

## Project Overview

This is an Art Collection project built with React + Vite. Each page is identified by a UUID and displays experimental content.

## Automatic HTML to React Transformation

**IMPORTANT**: When the user provides HTML content, you MUST automatically transform it into React components following these rules:

### Transformation Rules

1. **Component Structure**
   - Convert HTML files to React functional components
   - Use proper JSX syntax (className instead of class, etc.)
   - Extract inline styles to styled-components or CSS modules when appropriate
   - Create reusable components for repeated patterns

2. **Styling**
   - Keep inline styles in the style prop as JavaScript objects
   - Convert CSS properties to camelCase (e.g., background-color → backgroundColor)
   - For large style blocks, consider extracting to separate CSS modules

3. **File Organization**
   ```
   src/
   ├── components/
   │   └── [ComponentName]/
   │       ├── [ComponentName].jsx
   │       └── [ComponentName].module.css (if needed)
   ├── pages/
   │   └── [PageName].jsx
   └── App.jsx
   ```

4. **Naming Conventions**
   - Component files: PascalCase (e.g., ForensicExam.jsx)
   - CSS modules: [ComponentName].module.css
   - Use descriptive names that reflect content

5. **Props and State**
   - Add appropriate props for reusable components
   - Use React hooks (useState, useEffect) where needed
   - Keep components as pure as possible

### Example Transformation

**Input HTML:**
```html
<div class="container">
  <h1 style="color: red;">Title</h1>
  <p>Content here</p>
</div>
```

**Output React:**
```jsx
function MyComponent() {
  return (
    <div className="container">
      <h1 style={{ color: 'red' }}>Title</h1>
      <p>Content here</p>
    </div>
  );
}

export default MyComponent;
```

## Project Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build

## Adding New Pages

1. Create new React component in `src/pages/[UUID].jsx`
2. Add route in `src/App.jsx`
3. Update landing page with new entry

## UUID Management

- Each page MUST have a unique UUID
- UUIDs are used as route paths: `/page/[uuid]`
- Store page metadata in a central location (e.g., `src/data/pages.js`)

## Code Style

- Use functional components with hooks
- Prefer arrow functions for component definition
- Use destructuring for props
- Keep components focused and single-responsibility
- Add PropTypes or TypeScript types for better type safety
