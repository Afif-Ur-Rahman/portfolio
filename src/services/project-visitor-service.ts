import { connectDB } from "@/lib";
import { ProjectVisitor } from "@/models";

export const getProjectVisitorCount = async (projectId: string) => {
  await connectDB();
  return ProjectVisitor.countDocuments({ projectId });
};

export const trackProjectVisitor = async (visitorId: string, projectId: string) => {
  await connectDB();

  const isExistingVisitor = await ProjectVisitor.findOne({
    visitorId,
    projectId,
  });

  if (!isExistingVisitor) await ProjectVisitor.create({ visitorId, projectId });

  return getProjectVisitorCount(projectId);
};
