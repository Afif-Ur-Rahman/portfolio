import { catchAsync, connectDB } from "@/lib";
import { Suggestion } from "@/models";
import { NextRequest, NextResponse } from "next/server";

const isAuthorized = (req: NextRequest) => {
  const secret = req.headers.get("x-admin-secret");
  return secret && secret === process.env.ADMIN_SECRET;
};

export const PATCH = catchAsync<{ id: string }>(async (req, { params }) => {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const { id } = await params;

  await connectDB();
  const { reply } = await req.json();

  const updated = await Suggestion.findByIdAndUpdate(
    id,
    { reply, repliedAt: new Date() },
    { new: true },
  );

  return NextResponse.json({
    success: true,
    message: "Reply saved",
    data: updated,
  });
});

export const DELETE = catchAsync<{ id: string }>(async (req, { params }) => {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const { id } = await params;

  await connectDB();
  await Suggestion.findByIdAndUpdate(id, { isDeleted: true });

  return NextResponse.json({ success: true, message: "Suggestion deleted" });
});
