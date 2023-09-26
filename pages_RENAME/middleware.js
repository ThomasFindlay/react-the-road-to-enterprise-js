import { NextResponse } from "next/server";

const isLoggedIn = req => {
  return true;
};

const isAdmin = req => {
  return true;
};

export function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    // This logic is only applied to /about
    if (!isLoggedIn(req) && !isAdmin(req)) {
      return NextResponse.redirect(`${req.nextUrl.origin}/forbidden`);
    }
  }

  return NextResponse.next();
}
