import Wrapper from "@/components/share/wrapper";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full relative">
       {" "}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
        }}
      />
      <Wrapper>page</Wrapper>
      {/* Your Content/Components */}
    </div>
  );
};

export default page;
