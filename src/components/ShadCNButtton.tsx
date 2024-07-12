/*  2024-07-12 10:10:44

text-primary-button bg-primary-button-background border-primary-button-border border border-solid 


      <button
        type="submit"
        disabled={hasError ? true : false}
        className={cn(
          "p-primary-button bg-primary-button-background text-primary-button border-primary-button-border border border-solid",
          { "opacity-50 cursor-not-allowed": hasError }
        )}
      >
        {children} Primary Button
      </button>
      <button
        type="submit"
        className="p-secondary-button bg-secondary-button-background text-secondary-button border-secondary-button-border border border-solid "
      >
        secondary Button
      </button>
*/

import React from "react";
import { Button } from "./ui/button";
import { UseFormReturn } from "react-hook-form";
import { UserType } from "@/schemas/UserFormSchema";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type ShadCNButttonProps = {
  form?: UseFormReturn<UserType>;
  type?: "submit" | "button" | "reset";
  variant?: "default" | "destructive" | "outline" | "subtle" | "ghost" | "link";
  size?: "default" | "sm" | "ssm" | "lg" | "xlg";
  className?: string;
  children: React.ReactNode;
};

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      default:
        "text-primary-button bg-primary-button-background border-primary-button-border border border-solid ",
      destructive:
        "text-destructive bg-transparent border-2 border-solid border-destructive ",
      outline:
        "text-primary-button bg-transparent border-primary-button-border border border-solid ",
      subtle:
        "text-primary-button bg-primary-button-background border-primary-button-border border border-solid ",
      ghost: "text-primary-button bg-slate-300 bg-opacity-20  ",
      link: "text-primary-button bg-transparent border-transparent border border-solid ",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-8 py-2 px-3",
      ssm: "h-6 py-1 px-2",
      lg: "h-12 py-3 px-5",
      xlg: "h-14 py-4 px-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const ShadCNButtton = ({
  form = undefined,
  type = "button",
  className,
  variant,
  size,
  children,
}: ShadCNButttonProps) => {
  let hasError = false;
  if (form) {
    const {
      formState: { errors },
    } = form;
    hasError = Object.keys(errors).length > 0;
  }

  return (
    <Button
      type={type}
      disabled={hasError ? true : false}
      className={cn(buttonVariants({ variant, size, className }), "", {
        "opacity-50 cursor-not-allowed": hasError,
      })}
    >
      {children}
    </Button>
  );
};

export default ShadCNButtton;
