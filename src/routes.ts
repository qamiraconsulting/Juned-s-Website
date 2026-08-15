import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout/Layout.tsx", [
    index("pages/Home.tsx"),
    route("services", "pages/Services.tsx"),
    route("services/:slug", "pages/ServiceDetail.tsx"),
    route("quote", "pages/Quote.tsx"),
    route("faq", "pages/FAQ.tsx"),
  ]),
] satisfies RouteConfig;
