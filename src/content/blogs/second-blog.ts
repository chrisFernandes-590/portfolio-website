import type { Blog } from "@/types/Blog";

export const secondBlog: Blog = {
  id: "blog-002",
  slug: "typescript-best-practices",
  title: "TypeScript Best Practices for Large Projects",
  excerpt:
    "Learn the essential TypeScript patterns and practices that keep large codebases maintainable and type-safe.",
  content: `# TypeScript Best Practices for Large Projects

TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are the practices that keep our codebase clean.

## 1. Strict Mode

Always enable strict mode in your \`tsconfig.json\`. It catches more errors and provides better type safety.

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 2. Prefer Interfaces Over Types

Use interfaces for object shapes that can be extended, and types for unions, intersections, and mapped types.

## 3. Avoid \`any\`

The \`any\` type defeats the purpose of TypeScript. Use \`unknown\` when you don't know the type, and narrow it with type guards.

## Conclusion

Following these practices will make your TypeScript projects more maintainable and less error-prone.
`,
  publishedAt: "2026-02-20T14:30:00Z",
  tags: ["TypeScript", "Best Practices", "JavaScript"],
  readingTime: 4,
};
