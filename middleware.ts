import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin",
  },
});

export const config = {
  matcher: [
    "/career-ops/:path*",
    "/phd/:path*",
    "/research-pipeline/:path*",
    "/qf/:path*",
    "/ops/:path*",
  ],
};
