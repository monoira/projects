import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <HelmetProvider>
      <Header />

      <Toaster position="top-center" />

      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </HelmetProvider>
  );
}

export default Layout;
