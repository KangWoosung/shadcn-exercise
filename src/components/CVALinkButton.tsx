/*  2024-07-12 21:42:22


*/

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/lib/variants";
import React from "react";

type CVALinkButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
    type?: "submit" | "button" | "reset";
    variant?:
      | "default"
      | "link"
      | "destructive"
      | "outline"
      | "subtle"
      | "ghost"
      | null
      | undefined;
    size?: "default" | "sm" | "xs" | "lg" | "xlg";
    className?: string;
    children: React.ReactNode;
  };

const CVALinkButton = ({
  href,
  type = "button",
  variant,
  size,
  className,
  children,
  ...props
}: CVALinkButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (href) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default CVALinkButton;
