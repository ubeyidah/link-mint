"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-3">
      <h2 className="text-2xl font-medium">Something went wrong!</h2>
      <p>
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
