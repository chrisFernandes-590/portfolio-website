import type { Blog } from "@/types/Blog";

export const firstBlog: Blog = {
  id: "blog-001",
  slug: "getting-started-with-react",
  title: "Getting Started with React in 2026",
  excerpt:
    "A comprehensive guide to building modern web applications with React 19, including the latest features and best practices.",
  content: `# Getting Started with React in 2026

React continues to evolve, and 2026 brings exciting new features that make building user interfaces even more enjoyable.

## Why React?

React's component-based architecture makes it easy to build reusable UI elements. With the latest version, we get improved performance and developer experience.

## Key Concepts

### Components

Components are the building blocks of any React application. They let you split the UI into independent, reusable pieces.

\`\`\`tsx
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

### Hooks

Hooks let you use state and other React features without writing a class.

\`\`\`tsx
const [count, setCount] = useState(0);
\`\`\`

## Conclusion

React remains a powerful choice for building modern web applications. Start small, build often, and enjoy the journey.
`,
  publishedAt: "2026-01-15T10:00:00Z",
  tags: ["React", "JavaScript", "Web Development", "Tutorial"],
  readingTime: 5,
};
