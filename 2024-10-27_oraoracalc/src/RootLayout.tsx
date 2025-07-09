import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

function RootLayout() {
  return (
    <>
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
    </>
  );
}

export default RootLayout;
