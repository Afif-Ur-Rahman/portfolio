import { randomUUID } from "crypto";

export const COOKIE_NAME = "visitor_id";
export const ONE_YEAR = 60 * 60 * 24 * 365;

export const resolveVisitorId = (existingId?: string) => {
  return {
    visitorId: existingId ?? randomUUID(),
    isNewVisitor: !existingId,
  };
};
