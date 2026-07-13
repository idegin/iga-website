import type { Metadata } from "next";
import { StatusPage } from "@/components/layout/status-page";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <StatusPage
      code="404"
      eyebrow="Page not found"
      title="This page has moved on"
      lead="The link is broken, or the page no longer exists. Nothing is lost — everything you came for is still one click away."
    />
  );
}
