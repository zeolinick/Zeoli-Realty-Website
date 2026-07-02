import Link from "next/link";

/**
 * The doorway-arch mark + wordmark, rendered as live text so the
 * brand fonts always apply (the SVG lockups depend on a web font
 * that can't load inside an <img>).
 */
export function ArchMark({
  className = "h-8 w-8",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path
        fill={color}
        fillRule="evenodd"
        d="M14,94 L14,39 A36,36 0 0 1 50,3 A36,36 0 0 1 86,39 L86,94 A3,3 0 0 1 83,97 L17,97 A3,3 0 0 1 14,94 Z M28.4,97 L28.4,39 A21.6,21.6 0 0 1 50,17.4 A21.6,21.6 0 0 1 71.6,39 L71.6,97 Z"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const zeoli = variant === "dark" ? "text-ink" : "text-paper";
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Zeoli Realty — home"
    >
      <ArchMark
        className="h-7 w-7 shrink-0"
        color={variant === "dark" ? "#141414" : "#ffffff"}
      />
      <span className="whitespace-nowrap text-[1.35rem] leading-none tracking-tight">
        <span className={`font-bold ${zeoli}`}>Zeoli</span>
        <span className="font-semibold text-stone"> Realty</span>
      </span>
    </Link>
  );
}
