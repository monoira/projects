import { createRoot } from "react-dom/client";
import "./index.css";

import { lazy } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout.tsx";

const ErrorPage = lazy(() => import("./pages/ErrorPage.tsx"));
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const FormulasPage = lazy(() => import("./pages/FormulasPage.tsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="/formulas">
        <Route index element={<FormulasPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
