import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
export default createMiddleware(routing);

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("token")?.value;
//   // Якщо токену немає → редірект на логін
//   if (!token) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
//   return NextResponse.next();
// }

// Вказуємо, які шляхи захищати
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
