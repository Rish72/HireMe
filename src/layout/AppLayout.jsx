import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
const AppLayout = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="grid-background"></div>
      <main className="min-h-screen px-10">
        <Header />
        <Outlet />
      </main>
      <div className="p-4 text-center bg-gray-800 m-5">
        Made with ❤️ by Rishabh Goel
      </div>
    </div>
  );
};

export default AppLayout;
