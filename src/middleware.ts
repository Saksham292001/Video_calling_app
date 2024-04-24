import { authMiddleware } from "@clerk/nextjs";
import PersonalRoom from "./app/(root)/(home)/personal-room/page";

export default authMiddleware({
  publicRoutes: ["/", "/upcoming", "/previous", "/recordings", "/Personal-room", "/meeting(.*)"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};