import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log(token);
  console.log("12124142412");
  // Якщо токену немає → редірект на логін
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

// Вказуємо, які шляхи захищати
export const config = {
  matcher: ["/dashboard/:path*"],
};
