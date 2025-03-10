import React from "react";
import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }:{children:React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
