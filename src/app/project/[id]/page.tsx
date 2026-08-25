import { Header } from "@/components/layout";
import { Footer, ProjectDetails } from "@/ui/projects";
import { PROJECTS } from "@/ui/projects/constants";

type Props = {
  params: Promise<{ id: string }>;
};

async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find(p => p.id === id);

  return (
    <>
      <Header title={project?.title} page="project" />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <ProjectDetails id={id} />
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetailPage;
