import { NextRequest, NextResponse } from "next/server";

type RouteContext<T = Record<string, string>> = {
  params: Promise<T>;
};

type RouteHandler<T = Record<string, string>> = (
  req: NextRequest,
  context: RouteContext<T>,
) => Promise<NextResponse>;

export const catchAsync = <T = Record<string, string>>(
  handler: RouteHandler<T>,
): RouteHandler<T> => {
  return async (req: NextRequest, context: RouteContext<T>) => {
    try {
      return await handler(req, context);
    } catch (error) {
      console.error("API Error:", error);

      const message =
        error instanceof Error ? error.message : "Something went wrong";

      return NextResponse.json({ success: false, message }, { status: 500 });
    }
  };
};
