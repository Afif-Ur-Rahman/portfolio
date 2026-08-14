import { Schema, models, model } from "mongoose";

export interface IProjectVisitor {
  visitorId: string;
  projectId: string;
}

const ProjectVisitorSchema = new Schema<IProjectVisitor>({
  visitorId: { type: String, required: true },
  projectId: { type: String, required: true },
});

ProjectVisitorSchema.index({ visitorId: 1, projectId: 1 }, { unique: true });

export const ProjectVisitor =
  models.ProjectVisitor ||
  model<IProjectVisitor>("ProjectVisitor", ProjectVisitorSchema);
