import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  badgeText?: string;
  title: React.ReactNode;
  highlightTitle?: string;
  gradientTitle?: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badgeText,
  title,
  highlightTitle,
  gradientTitle,
  description,
  align = "center",
  className,
  ...props
}: SectionHeaderProps) {
  const highlight = highlightTitle || gradientTitle;

  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {badgeText && (
        <Badge variant="outline-brand" className="py-1 px-3.5">
          {badgeText}
        </Badge>
      )}

      <h2 className="text-3xl font-extrabold tracking-wider uppercase sm:text-4xl text-foreground">
        {title}{" "}
        {highlight && (
          <span className="text-primary font-extrabold uppercase">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-muted-foreground max-w-xl text-base sm:text-lg text-balance normal-case font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
