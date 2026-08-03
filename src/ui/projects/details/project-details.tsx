"use client";

import { notFound } from "next/navigation";
import {
  Features,
  Gallery,
  Hero,
  SecurityAutomation,
  TechnicalHighlights,
} from "./blocks";
import { PROJECTS, PROJECTS_DETAILS } from "../constants";
import { FloatingIcons } from "@/components";

type ProjectDetailsProps = {
  id: string;
};

export const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const project = PROJECTS.find((p) => p.id === id);
  const detail = PROJECTS_DETAILS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero
        title={project.title}
        description={detail?.description || project.description}
        image={project.image}
        tags={project.tags}
        liveUrl={project.liveUrl}
      />
      {detail && (
        <>
          <Gallery gallery={detail.gallery} isMobile={project.isMobile} />
          <Features features={detail.features} />
          <SecurityAutomation
            security={detail.security}
            automation={detail.automation}
          />
          <TechnicalHighlights highlights={detail.technicalHighlights} />
        </>
      )}
      <FloatingIcons />
    </>
  );
};
