import * as React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium font-display transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          // Variants
          variant === "primary" && "bg-primary text-brand-dark hover:bg-primary-dark shadow-[0_0_15px_rgba(109,190,61,0.2)] hover:shadow-[0_0_25px_rgba(109,190,61,0.4)]",
          variant === "secondary" && "bg-brand-card text-brand-light border border-white/10 hover:border-primary/50 hover:bg-brand-dark",
          variant === "outline" && "bg-transparent text-primary border border-primary hover:bg-primary/10",
          variant === "ghost" && "bg-transparent text-brand-light hover:bg-white/5 hover:text-white",
          variant === "link" && "bg-transparent text-primary hover:underline p-0",
          // Sizes
          size === "sm" && "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm",
          size === "md" && "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
          size === "lg" && "px-5 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
