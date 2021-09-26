import React, { useContext, Suspense, useEffect, lazy } from "react";
import Helmet from "react-helmet";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "./Main";
import { SidebarContext } from "../context/SidebarContext";

const Layout = ({ title, children }) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = "useLocation()"; //find alternative using ziggy

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />
      <Helmet titleTemplate="%s | Synergy LMS" title={title} />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>{children}</Main>
      </div>
    </div>
  );
};

export default Layout;
