import { NextResponse, type NextRequest } from "next/server";
import { ROUTES } from "./constants";

const { AUTH, LOGIN, FORGOT_PASSWORD } = ROUTES;

const PUBLIC_PATHS = ["/"];
const GUEST_ONLY_PATHS = [`${AUTH}${LOGIN}`, `${AUTH}${FORGOT_PASSWORD}`];

const isPathMatch = (pathname: string, paths: string[]) =>
  paths.some((path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path),
  );

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images/|audio/|assets/|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.ico$|.*\\.mp3$|.*\\.mp4$|.*\\.webp$).*)",
    { source: "/" },
  ],
};

const middleware = async (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const headers = new Headers(request.headers);

  headers.set("x-current-path", pathname);

  if (
    request.headers.get("next-action") !== null ||
    pathname.startsWith("/api-v1")
  ) {
    return NextResponse.next();
  }

  const isPublicRoute = isPathMatch(pathname, PUBLIC_PATHS);
  const isGuestOnlyRoute = isPathMatch(pathname, GUEST_ONLY_PATHS);

  if (isPublicRoute) {
    return NextResponse.next({ headers });
  }

  if (isGuestOnlyRoute) {
    return NextResponse.next({ headers });
  }

  return NextResponse.next({ headers });
};

export default middleware;
