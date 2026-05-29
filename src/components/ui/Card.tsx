import * as React from "react";
import { cn } from "@/utils/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border border-slate-100 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]",
          hoverEffect && "hover:border-primary/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
