import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <Toaster position="top-center" />

      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Suspense fallback={<p>{t("messages.loading")}</p>}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </>
  );
}

export default RootLayout;
