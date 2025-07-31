import Navbar from "@/components/share/nav-bar";
import { RootLayoutProps } from "@/types";
import React from "react";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default layout;
