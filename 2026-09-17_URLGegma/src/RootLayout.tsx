import { Suspense } from "react";
import { Box } from "@mui/material";

import { Outlet } from "react-router";

import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout() {
  const { t } = useTranslation(["common"]);

  return (
    <>
      <Header />

      <Box sx={{ minHeight: "100vh", p: 1 }}>
        <Suspense fallback={t("common:loading")}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </>
  );
}

export default RootLayout;
