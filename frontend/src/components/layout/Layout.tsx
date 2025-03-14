import React from "react";
import Footer from "./Footer";
import Header from "./Header";

/**
 * **Layout Component**
 * - Provides a consistent page layout with a header, footer, and main content area.
*/
export default function Layout({ children }:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />

      {/* Main Content Section */}
      <main className="">{children}</main>
      
      <Footer />
    </div>
  );
}
