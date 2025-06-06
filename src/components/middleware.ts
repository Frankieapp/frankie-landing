// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next|.*\\..*|favicon.ico).*)"], // updated matcher!
};
