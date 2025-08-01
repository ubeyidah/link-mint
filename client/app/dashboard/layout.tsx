import { RootLayoutProps } from "@/types";
import React from "react";
import Navbar from "./_components/nav-bar";
import Footer from "@/components/share/footer";
import Wrapper from "@/components/share/wrapper";

const layout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Navbar />
      <Wrapper as="main">{children}</Wrapper>
      <Footer />
    </>
  );
};

export default layout;
