import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Container } from "@/components/common/container";
import { portfolioService } from "@/services";
import { routeHelpers } from "@/constants/routes";
import type { Blog } from "@/types/Blog";

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

export function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    portfolioService.getBlogs().then(setBlogs);
  }, []);

  return (
    <Container>
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium tracking-tight">Writing</h2>
        <p className="mt-2 text-sm text-foreground">Thoughts & tutorials</p>

        <div className="mt-8 space-y-4">
          {blogs.map((blog) => (
            <article key={blog.id} className="group flex items-baseline gap-4">
              <Link
                to={routeHelpers.blog(blog.slug)}
                className="text-sm transition-opacity hover:opacity-60 flex-1"
              >
                {blog.title}
              </Link>
              <span className="shrink-0 text-sm text-foreground">
                {formatDate(blog.publishedAt)}
              </span>
            </article>
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="mt-8 text-sm text-foreground">No posts to display yet.</p>
        )}
      </section>
    </Container>
  );
}
