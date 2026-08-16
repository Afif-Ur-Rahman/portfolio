import { Schema, model, models, Document } from "mongoose";

export interface ISuggestion extends Document {
  name?: string;
  message: string;
  reply?: string;
  repliedAt?: Date;
  visitorId?: string;
  isDeleted: boolean;
  createdAt: Date;
}

const SuggestionSchema = new Schema<ISuggestion>(
  {
    name: { type: String, trim: true, maxlength: 80 },
    message: { type: String, required: true, trim: true, maxlength: 1000 },
    reply: { type: String, trim: true, maxlength: 1000 },
    repliedAt: { type: Date },
    visitorId: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

SuggestionSchema.index({ isDeleted: 1, createdAt: -1 });

export const Suggestion =
  models.Suggestion || model<ISuggestion>("Suggestion", SuggestionSchema);
