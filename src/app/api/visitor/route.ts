import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { Visitor } from "@/models";
import { connectDB } from "@/lib";

const COOKIE_NAME = "visitor_id";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    let visitorId = req.cookies.get(COOKIE_NAME)?.value;
    const isNewVisitor = !visitorId;

    if (!visitorId) {
      visitorId = randomUUID();
    }

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

    const totalVisitors = await Visitor.countDocuments();

    const res = NextResponse.json({ success: true, totalVisitors });

    if (isNewVisitor) {
      res.cookies.set(COOKIE_NAME, visitorId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
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
