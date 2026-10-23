import * as React from "react";

import { cn } from "@/lib/utils";

interface BrowserWindowProps {
  children?: React.ReactNode;
  className?: string;
  url?: string;
  variant?: "chrome" | "safari" | "generic";
  showAddressBar?: boolean;
}

function WindowDots() {
  const dots = [
    { color: "bg-red-500", mark: "h-0.5 w-1.5 bg-red-900/60" },
    { color: "bg-yellow-500", mark: "h-0.5 w-1.5 bg-yellow-900/60" },
    { color: "bg-green-500", mark: "h-1 w-1 border border-green-900/60" },
  ];

  return (
    <div className="flex gap-2">
      {dots.map((dot) => (
        <div
          key={dot.color}
          className={cn(
            "group flex size-2 cursor-default items-center justify-center rounded-full border border-foreground/20 transition-colors",
            dot.color
          )}
        >
          <div className={cn("opacity-0 transition-opacity", dot.mark)} />
        </div>
      ))}
    </div>
  );
}

export function BrowserWindow({
  children,
  className,
  url = "https://example.com",
  variant = "chrome",
  showAddressBar = true,
}: BrowserWindowProps) {
  const addressBarStyles =
    variant === "safari"
      ? "rounded-lg border-foreground/5 bg-muted/20"
      : "rounded-full border-foreground/5 bg-muted/30";

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border bg-background shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)_inset] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.06)_inset]",
        className
      )}
    >
      <div className="flex h-11 shrink-0 items-center border-b bg-muted/30 px-4">
        <WindowDots />
        {showAddressBar && (
          <div className="flex flex-1 justify-center">
            <div
              className={cn(
                "flex min-w-[200px] max-w-md flex-1 items-center gap-2 border px-4 py-1.5 text-xs text-muted-foreground shadow-[0_1px_2px_0_rgba(0,0,0,0.03)_inset]",
                addressBarStyles
              )}
            >
              <svg viewBox="0 0 12 12" fill="currentColor" className="size-3">
                <path d="M6 1a2.5 2.5 0 0 1 2.5 2.5V5h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.5V3.5A2.5 2.5 0 0 1 6 1z" />
              </svg>
              <span className="truncate">{url}</span>
            </div>
          </div>
        )}
      </div>
      <div className="relative min-h-0 flex-1">{children}</div>
    </div>
  );
}
