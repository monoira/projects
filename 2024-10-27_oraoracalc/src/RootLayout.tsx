import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout() {
  return (
    <HelmetProvider>
      <Header />

      <Toaster position="top-center" />

      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>

      <Footer />
    </HelmetProvider>
  );
}

export default RootLayout;
