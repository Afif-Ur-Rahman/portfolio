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
  const uniqueVisitors = await Visitor.distinct("visitorId");
  return uniqueVisitors.length;
};

export const trackVisitor = async (visitorId: string) => {
  await connectDB();

  const isExistingVisitor = await Visitor.exists({ visitorId });
  if (!isExistingVisitor) {
    await Visitor.create({ visitorId });
  }

  return getVisitorCount();
};
