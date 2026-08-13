import { randomUUID } from "crypto";
import { connectDB } from "@/lib";
import { Visitor } from "@/models";

export const COOKIE_NAME = "visitor_id";
export const ONE_YEAR = 60 * 60 * 24 * 365;

export const resolveVisitorId = (existingId?: string) => {
  return {
    visitorId: existingId ?? randomUUID(),
    isNewVisitor: !existingId,
  };
};

export const getVisitorCount = async () => {
  await connectDB();
  return Visitor.countDocuments();
};

export const trackVisitor = async (visitorId: string) => {
  await connectDB();

  const now = new Date();

  await Visitor.findOneAndUpdate(
    { visitorId },
    {
      $set: { lastVisit: now },
      $setOnInsert: { firstVisit: now },
      $inc: { visitCount: 1 },
    },
    { upsert: true, new: true },
  );

  return Visitor.countDocuments();
};
