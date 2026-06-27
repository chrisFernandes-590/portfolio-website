import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import type { Components } from "react-markdown";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Tag } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { portfolioService } from "@/services";
import type { Blog } from "@/types/Blog";

const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1 className="mt-10 mb-4 text-4xl font-bold tracking-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mt-8 mb-3 text-3xl font-bold tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-6 mb-2 text-2xl font-bold tracking-tight" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-5 mb-2 text-xl font-semibold" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="mt-4 leading-7 first:mt-0" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mt-3 mb-3 list-disc pl-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mt-3 mb-3 list-decimal pl-6" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="mt-1 leading-7" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold" {...props}>
      {children}
    </strong>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono"
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
      className="my-5 overflow-x-auto rounded-lg bg-[#0f0f11] p-4 text-sm leading-relaxed dark:bg-[#0a0a0c]"
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-5 border-l-3 border-primary pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-primary underline underline-offset-2 transition-opacity hover:opacity-80"
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
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border border-border bg-muted px-3 py-2 text-left font-medium" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border px-3 py-2" {...props}>
      {children}
    </td>
  ),
};

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
      <Section>
        <Container>
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
              <div className="size-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
              <Text variant="muted">Loading article...</Text>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  if (!blog) {
    return (
      <Section>
        <Container>
          <div className="py-24 text-center">
            <Heading level="h1">Post Not Found</Heading>
            <Text variant="muted" className="mt-4">
              The blog post you're looking for doesn't exist.
            </Text>
            <Button variant="outline" className="mt-6" asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-4" />
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-4" />
              {blog.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <Heading level="h1" className="mt-4">
            {blog.title}
          </Heading>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-8 border-border" />

          {/* Markdown Content */}
          <div className="prose-blog">
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
    </Section>
  );
}
