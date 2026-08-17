import { ADMIN_SECRET } from "@/constants";
import { catchAsync, connectDB } from "@/lib";
import { Suggestion } from "@/models";
import { COOKIE_NAME, resolveVisitorId } from "@/services";
import { NextRequest, NextResponse } from "next/server";

console.log("admin", ADMIN_SECRET);

const isAdmin = (req: NextRequest) => {
  const secret = req.headers.get("x-admin-secret");
  return secret && secret === ADMIN_SECRET;
};

const getOwnedSuggestion = async (req: NextRequest, id: string) => {
  const { visitorId } = resolveVisitorId(req.cookies.get(COOKIE_NAME)?.value);
  if (!visitorId) return null;

  return Suggestion.findOne({
    _id: id,
    visitorId,
    isDeleted: { $ne: true },
  });
};

export const PATCH = catchAsync<{ id: string }>(async (req, { params }) => {
  const { id } = await params;
  await connectDB();

  if (isAdmin(req)) {
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
  }

  const owned = await getOwnedSuggestion(req, id);
  if (!owned) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  const { message } = await req.json();
  if (!message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Message is required" },
      { status: 400 },
    );
  }

  const updated = await Suggestion.findByIdAndUpdate(
    id,
    { message: message.trim() },
    { new: true },
  );

  return NextResponse.json({
    success: true,
    message: "Suggestion updated",
    data: updated,
  });
});

export const DELETE = catchAsync<{ id: string }>(async (req, { params }) => {
  const { id } = await params;
  await connectDB();

  if (isAdmin(req)) {
    await Suggestion.findByIdAndUpdate(id, { isDeleted: true });
    return NextResponse.json({ success: true, message: "Suggestion deleted" });
  }

  const owned = await getOwnedSuggestion(req, id);
  if (!owned) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  await Suggestion.findByIdAndUpdate(id, { isDeleted: true });

  return NextResponse.json({ success: true, message: "Suggestion deleted" });
});
