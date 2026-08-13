import { NextResponse, type NextRequest } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images/|audio/|assets/|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.ico$|.*\\.mp3$|.*\\.mp4$|.*\\.webp$).*)",
    { source: "/" },
  ],
};

const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (/^\/project\/[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
};

export default middleware;
