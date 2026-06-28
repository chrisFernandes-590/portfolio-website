import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import type { Blog } from "@/types/Blog";

const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="mt-10 mb-4 text-3xl font-medium tracking-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mt-8 mb-3 text-2xl font-medium tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-6 mb-2 text-xl font-medium tracking-tight" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-5 mb-2 text-lg font-medium" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mt-4 leading-relaxed text-foreground first:mt-0" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mt-3 mb-3 list-disc pl-6 text-foreground" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mt-3 mb-3 list-decimal pl-6 text-foreground" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mt-1 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="my-5 overflow-x-auto rounded-lg bg-[#0f0f11] p-4 text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-5 border-l-2 border-foreground/20 pl-4 italic text-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  hr: () => <hr className="my-8 border-border" />,
  img: ({ src, alt, ...props }) => (
    <img
      src={src}
      alt={alt || ""}
      className="my-6 rounded-lg"
      loading="lazy"
      {...props}
    />
  ),
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm text-foreground" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-border bg-muted px-3 py-2 text-left font-medium text-foreground" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border px-3 py-2" {...props}>
      {children}
    </td>
  ),
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    portfolioService.getBlogBySlug(slug).then((b) => {
      setBlog(b ?? null);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <section className="py-12 md:py-16">
          <div className="flex flex-col items-start gap-3">
            <div className="size-4 animate-spin rounded-full border-2 border-muted-foreground border-t-foreground" />
            <p className="text-sm text-foreground">Loading article...</p>
          </div>
        </section>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container>
        <section className="py-12 md:py-16">
          <h1 className="text-2xl font-medium tracking-tight">Post Not Found</h1>
          <p className="mt-4 text-sm text-foreground">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center gap-1 text-sm text-foreground underline underline-offset-2 decoration-foreground/30 hover:decoration-foreground transition-all"
          >
            <ArrowLeft className="size-3.5" />
            Back to Blog
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <article className="py-12 md:py-16">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-foreground transition-opacity hover:opacity-60"
        >
          <ArrowLeft className="size-3.5" />
          Back to Blog
        </Link>

        {/* Meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-foreground">
          <span>{formatDate(blog.publishedAt)}</span>
          <span>&middot;</span>
          <span>{blog.readingTime} min read</span>
        </div>

        {/* Title */}
        <h1 className="mt-2 text-3xl font-medium tracking-tight">
          {blog.title}
        </h1>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground">
          {blog.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-8 border-border" />

        {/* Markdown Content */}
        <div className="max-w-xl">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={markdownComponents}
          >
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </Container>
  );
}
