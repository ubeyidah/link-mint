"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function TooltipProvider({
  children,
}: {
  children: React.ReactNode
  delayDuration?: number
}) {
  return <>{children}</>
}

function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/tooltip relative inline-flex">{children}</div>
  )
}

function TooltipTrigger({
  children,
  asChild,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  if (asChild && React.isValidElement(children)) {
    return children
  }
  return <button {...props}>{children}</button>
}

function TooltipContent({
  children,
  side = "top",
  align,
  hidden,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  hidden?: boolean
}) {
  if (hidden) return null
  return (
    <div
      role="tooltip"
      className={cn(
        "absolute z-50 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground whitespace-nowrap pointer-events-none opacity-0 group-hover/tooltip:opacity-100 transition-opacity",
        side === "right" && "left-full top-1/2 -translate-y-1/2 ml-2",
        side === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
        side === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
        side === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
