import { createBrowserRouter } from "react-router";
import type { ComponentType } from "react";

// boilerplate needed for lazy loading routes
function lazyRoute<T extends { default: ComponentType }>(
  load: () => Promise<T>,
) {
  return async () => {
    const { default: Component, ...rest } = await load();
    return { Component, ...rest };
  };
}

// react-router - data mode
export const router = createBrowserRouter([
  {
    path: "/",
    lazy: lazyRoute(() => import("./RootLayout.tsx")),
    children: [
      {
        index: true,
        lazy: lazyRoute(() => import("./routes/HomeRoute.tsx")),
      },
      {
        path: "program",
        lazy: lazyRoute(() => import("./routes/ProgramRoute.tsx")),
      },
      {
        path: "program/:encoded",
        lazy: lazyRoute(() => import("./routes/ProgramRoute.tsx")),
      },
      {
        path: "*",
        lazy: lazyRoute(() => import("./routes/ErrorRoute.tsx")),
      },
    ],
  },
]);
