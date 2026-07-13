"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121e4d",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: "34rem" }}>
          <p
            style={{
              color: "#e3af64",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            IGA Global Investments
          </p>
          <h1
            style={{
              fontSize: "2.5rem",
              lineHeight: 1.15,
              margin: "1.5rem 0 0",
            }}
          >
            Something went badly wrong
          </h1>
          <p style={{ color: "#e1ebfc", lineHeight: 1.6, marginTop: "1rem" }}>
            The site failed to load. Reload the page, and if the problem
            continues please get in touch.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.9rem 1.75rem",
              borderRadius: "14px",
              border: "none",
              background: "#e3af64",
              color: "#121e4d",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Reload the page
          </button>
        </main>
      </body>
    </html>
  );
}
