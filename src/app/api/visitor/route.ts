import { NextRequest, NextResponse } from "next/server";

import { MODE } from "@/constants";
import { COOKIE_NAME, getVisitorCount, ONE_YEAR, resolveVisitorId, trackVisitor } from "@/services";

export const GET = async () => {
  try {
    const totalVisitors = await getVisitorCount();
    return NextResponse.json({ success: true, totalVisitors });
  } catch (err) {
    console.error("Visitor count fetch error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { visitorId, isNewVisitor } = resolveVisitorId(req.cookies.get(COOKIE_NAME)?.value);

    const totalVisitors = await trackVisitor(visitorId);

    const res = NextResponse.json({ success: true, totalVisitors, visitorId });

    if (isNewVisitor) {
      res.cookies.set(COOKIE_NAME, visitorId, {
        secure: MODE === "production",
        sameSite: "lax",
        maxAge: ONE_YEAR,
        path: "/",
      });
    }

    return res;
  } catch (err) {
    console.error("Visitor tracking error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
