import { notFound } from "next/navigation";
import {
  Features,
  Footer,
  Hero,
  SecurityAutomation,
  TechnicalHighlights,
} from "./blocks";
import { PROJECTS, PROJECTS_DETAILS } from "../constants";

type ProjectDetailsProps = {
  id: string;
};

export const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const project = PROJECTS.find((p) => p.id === id);
  const detail = PROJECTS_DETAILS.find((p) => p.id === id);

  if (!project || !detail) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Hero
        title={project.title}
        description={detail.description}
        image={project.image}
        tags={project.tags}
        liveUrl={project.liveUrl}
      />
      <Features features={detail.features} />
      <SecurityAutomation
        security={detail.security}
        automation={detail.automation}
      />
      <TechnicalHighlights highlights={detail.technicalHighlights} />
      <Footer />
    </div>
  );
};
