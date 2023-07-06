import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const username = req.cookies.get("username");

  if (!username) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};