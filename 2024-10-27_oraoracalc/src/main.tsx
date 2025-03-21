import { createRoot } from "react-dom/client";
import "./index.css";

import { lazy } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const RootLayout = lazy(() => import("./RootLayout.tsx"));
const HomeRoute = lazy(() => import("./routes/HomeRoute.tsx"));
const FormulasRoute = lazy(() => import("./routes/FormulasRoute.tsx"));
const ErrorRoute = lazy(() => import("./routes/ErrorRoute.tsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomeRoute />} />

      <Route path="/formulas">
        <Route index element={<FormulasRoute />} />
      </Route>

      <Route path="*" element={<ErrorRoute />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
