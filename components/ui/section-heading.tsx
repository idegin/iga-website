import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <p className={cn("eyebrow", align === "center" && "justify-center")}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-h2">
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "measure mt-5 text-body-lg text-muted",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
