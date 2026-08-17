import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_NAME,
  ONE_YEAR,
  resolveVisitorId,
  getProjectVisitorCount,
  trackProjectVisitor,
} from "@/services";

type RouteContext = { params: Promise<{ projectId: string }> };

export const GET = async (_req: NextRequest, { params }: RouteContext) => {
  try {
    const { projectId } = await params;
    const totalVisitors = await getProjectVisitorCount(projectId);
    return NextResponse.json({ success: true, totalVisitors });
  } catch (err) {
    console.error("Project visitor count fetch error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};

export const POST = async (req: NextRequest, { params }: RouteContext) => {
  try {
    const { projectId } = await params;

    const { visitorId, isNewVisitor } = resolveVisitorId(
      req.cookies.get(COOKIE_NAME)?.value,
    );

    const totalVisitors = await trackProjectVisitor(visitorId, projectId);

    const res = NextResponse.json({ success: true, totalVisitors });

    if (isNewVisitor) {
      res.cookies.set(COOKIE_NAME, visitorId, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: ONE_YEAR,
        path: "/",
      });
    }

    return res;
  } catch (err) {
    console.error("Project visitor tracking error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
};
