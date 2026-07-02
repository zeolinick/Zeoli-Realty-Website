import Link from "next/link";
import { ArchMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="bg-bone">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-28 text-center md:py-40">
        <ArchMark className="h-12 w-12" color="#8c8b7e" />
        <h1 className="display mt-8 text-4xl md:text-5xl">
          This door doesn't <em>open.</em>
        </h1>
        <p className="mt-4 max-w-md text-slate">
          The page you're looking for has moved or never existed. Let's get
          you back home.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back to the front door
        </Link>
      </div>
    </section>
  );
}
