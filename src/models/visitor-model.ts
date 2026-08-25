import { Schema, models, model } from "mongoose";

export interface IVisitor {
  visitorId: string;
}

const VisitorSchema = new Schema<IVisitor>({
  visitorId: { type: String, required: true },
});

VisitorSchema.index({ visitorId: 1 }, { unique: true });

export const Visitor = models.Visitor || model<IVisitor>("Visitor", VisitorSchema);
