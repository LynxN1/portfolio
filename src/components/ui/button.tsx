import { cn } from "@/lib/utils";
import React from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-full px-10 py-3 w-fit duration-200",
  variants: {
    variant: {
      default: "bg-indigo-600 hover:bg-indigo-700",
      outlined: "border border-indigo-600 hover:bg-indigo-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined" | undefined;
}

function Button({ children, className, variant, ...rest }: ButtonProps) {
  return (
    <button className={cn(button({ variant }), className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
