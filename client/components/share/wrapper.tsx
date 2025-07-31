import React, { JSX } from "react";
import clsx from "clsx";
interface WrapperProps {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}
const Wrapper = ({
  className,
  children,
  as: Component = "div",
}: WrapperProps) => {
  return (
    <Component className={clsx("max-w-6xl mx-auto px-3 md:px-5", className)}>
      {children}
    </Component>
  );
};

export default Wrapper;
