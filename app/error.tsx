"use client";

import { useEffect } from "react";
import { StatusPage } from "@/components/layout/status-page";
import { Button } from "@/components/ui/button";
import { UI_ICONS } from "@/lib/icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      eyebrow="Something went wrong"
      title="That did not load as it should"
      lead="The fault is on our side, not yours. Try again — and if it keeps happening, tell us and we will look into it."
      action={
        <Button
          variant="gold"
          size="xl"
          icon={UI_ICONS.arrow}
          onClick={reset}
        >
          Try again
        </Button>
      }
    >
      {error.digest ? (
        <p className="mt-8 text-caption text-royal-200">
          Reference:{" "}
          <span className="numeric text-accent">{error.digest}</span>
        </p>
      ) : null}
    </StatusPage>
  );
}
