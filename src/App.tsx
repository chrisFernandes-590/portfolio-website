import { Routes, Route } from "react-router";
import { PageLayout } from "@/components/layout/page-layout";
import { HomePage } from "@/pages/home";
import { ProjectsPage } from "@/pages/projects";
import { ProjectDetailPage } from "@/pages/projects";
import { BlogPage } from "@/pages/blog";
import { BlogDetailPage } from "@/pages/blog";
import { AboutPage } from "@/pages/about";
import { ContactPage } from "@/pages/contact";
import { ROUTES } from "@/constants/routes";
import "./App.css";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
        <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetailPage />} />
        <Route path={ROUTES.BLOG} element={<BlogPage />} />
        <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
