/*  2024-07-12 17:28:37


*/

import { cn } from "@/lib/utils";
import { linkVariants } from "@/lib/variants";
import React from "react";

type CVALinkTextProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  type?: "submit" | "button" | "reset";
  variant?: "default" | "left" | "right" | "thickness";
  size?: "default" | "sm" | "xs" | "lg" | "xlg";
  className?: string;
  children: React.ReactNode;
};

const CVALinkText = ({
  href,
  type,
  variant,
  size,
  className,
  children,
}: CVALinkTextProps) => {
  return (
    <a
      href={href}
      type={type}
      className={cn(linkVariants({ variant, size, className }))}
    >
      {children}
    </a>
  );
};

export default CVALinkText;
