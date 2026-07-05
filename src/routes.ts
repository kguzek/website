import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  route("/:locale?", "./routes/_layout.tsx", [
    index("./routes/_layout.home.tsx"),
    route("projects/:slug", "./routes/_layout.projects.$slug.tsx"),
  ]),
  route("*", "./routes/$.tsx"),
] satisfies RouteConfig;
