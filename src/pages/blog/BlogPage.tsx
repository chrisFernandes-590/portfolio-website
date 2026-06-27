import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SectionHeader } from "@/components/common/section-header";
import { Heading } from "@/components/common/heading";
import { Text } from "@/components/common/text";
import { Tag } from "@/components/common/tag";
import { portfolioService } from "@/services";
import { routeHelpers } from "@/constants/routes";
import type { Blog } from "@/types/Blog";

export function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    portfolioService.getBlogs().then(setBlogs);
  }, []);

  const featuredBlog = blogs[0];

  return (
    <Section>
      <Container>
        <SectionHeader
          title="Blog"
          subtitle="Thoughts & tutorials"
          description="Writing about web development, TypeScript, React, and building better software."
        />

        {blogs.length === 0 && (
          <div className="mt-12 text-center">
            <Text variant="muted">No posts to display yet.</Text>
          </div>
        )}

        {/* Featured Post */}
        {featuredBlog && (
          <div className="mt-12">
            <Link
              to={routeHelpers.blog(featuredBlog.slug)}
              className="group relative block overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Visual accent */}
                <div className="hidden w-2 shrink-0 bg-primary sm:block" />
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      Featured
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="size-3.5" />
                      {featuredBlog.readingTime} min read
                    </span>
                  </div>

                  <Heading
                    level="h2"
                    className="mt-4 group-hover:text-primary transition-colors"
                  >
                    {featuredBlog.title}
                  </Heading>

                  <Text variant="body" className="mt-3 line-clamp-2 text-muted-foreground">
                    {featuredBlog.excerpt}
                  </Text>

                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5" />
                      {new Date(featuredBlog.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {featuredBlog.tags.map((tag) => (
                      <Tag key={tag} variant="outline">
                        {tag}
                      </Tag>
                    ))}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5">
                    Read article <ArrowRight className="size-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Remaining Posts Grid */}
        {blogs.length > 1 && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {blogs.slice(1).map((blog) => (
              <Link
                key={blog.id}
                to={routeHelpers.blog(blog.slug)}
                className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="size-3.5" />
                    {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>&middot;</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {blog.readingTime} min
                  </span>
                </div>

                <Heading
                  level="h3"
                  className="mt-3 group-hover:text-primary transition-colors"
                >
                  {blog.title}
                </Heading>

                <Text variant="muted" className="mt-2 line-clamp-2">
                  {blog.excerpt}
                </Text>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} variant="outline">
                      {tag}
                    </Tag>
                  ))}
                  {blog.tags.length > 3 && (
                    <Tag variant="outline">+{blog.tags.length - 3}</Tag>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
