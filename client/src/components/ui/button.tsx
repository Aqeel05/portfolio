import { ButtonHTMLAttributes, ReactNode } from "react";

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  children?: ReactNode;
}

export function Button({ className, variant = "default", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:opacity-50",
        variant === "outline"
          ? "border border-white/20 bg-transparent text-white hover:bg-white/10"
          : "bg-white text-black hover:bg-white/90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
