import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 disabled:opacity-50 dark:focus:ring-neutral-400 disabled:pointer-events-none dark:focus:ring-offset-neutral-900 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-700 dark:bg-neutral-950 dark:hover:bg-neutral-950 dark:hover:border-neutral-500 dark:text-neutral-50",
        action:
          "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-300 dark:text-neutral-950",
        destructive: "bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700",
        outline:
          "bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100",
        subtle:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-800 dark:hover:border-neutral-500 dark:text-neutral-50",
        ghost:
          "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...other }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...other} />
    );
  }
);
Button.displayName = "Button";

const ButtonSkeleton = ({
  className,
  ...other
}: React.ComponentPropsWithoutRef<typeof Skeleton>) => (
  <Skeleton
    className={cn("h-10 w-44 rounded-md border border-neutral-700", className)}
    {...other}
  />
);

export { Button, buttonVariants, ButtonSkeleton };
