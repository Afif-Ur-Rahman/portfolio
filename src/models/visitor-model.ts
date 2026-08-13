import { Schema, models, model } from "mongoose";

export interface IVisitor {
  visitorId: string;
  firstVisit: Date;
  lastVisit: Date;
  visitCount: number;
}

const VisitorSchema = new Schema<IVisitor>({
  visitorId: { type: String, required: true, unique: true, index: true },
  firstVisit: { type: Date, required: true },
  lastVisit: { type: Date, required: true },
  visitCount: { type: Number, default: 1 },
});

export const Visitor =
  models.Visitor || model<IVisitor>("Visitor", VisitorSchema);
