import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    const response = NextResponse.next();
    const themeprefences = request.headers.get("theme");
    if (!themeprefences) {
      response.cookies.set("theme", "dark");
    }
    return response;
  }
}
