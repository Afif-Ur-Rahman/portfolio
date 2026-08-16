import { catchAsync, connectDB, sendSuggestionAlert } from "@/lib";
import { Suggestion } from "@/models";
import { COOKIE_NAME, resolveVisitorId } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export const GET = catchAsync(async () => {
  await connectDB();
  const suggestions = await Suggestion.find({ isDeleted: { $ne: true } })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({
    success: true,
    message: "Fetched",
    data: suggestions,
  });
});

export const POST = catchAsync(async (req: NextRequest) => {
  await connectDB();
  const { name, message } = await req.json();

  const { visitorId } = resolveVisitorId(req.cookies.get(COOKIE_NAME)?.value);

  if (!message?.trim()) {
    return NextResponse.json(
      { success: false, message: "Message is required" },
      { status: 400 },
    );
  }

  const suggestion = await Suggestion.create({
    name,
    message,
    visitorId,
  });

  sendSuggestionAlert({
    suggestionId: suggestion._id.toString(),
    name,
    message,
  }); // fire-and-forget, not awaited

  return NextResponse.json({
    success: true,
    message: "Suggestion submitted",
    data: suggestion,
  });
});
