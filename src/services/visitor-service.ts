import { connectDB } from "@/lib";
import { Visitor } from "@/models";

export const getVisitorCount = async () => {
  await connectDB();
  const uniqueVisitors = await Visitor.distinct("visitorId");
  return uniqueVisitors.length;
};

export const trackVisitor = async (visitorId: string) => {
  await connectDB();

  const isExistingVisitor = await Visitor.findOne({ visitorId });
  if (!isExistingVisitor) await Visitor.create({ visitorId });

  return getVisitorCount();
};
