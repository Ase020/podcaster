import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPubilicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
]);

export default clerkMiddleware((auth, req) => {
  if (!isPubilicRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
