import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="mark">— Not found —</div>
      <h1>
        A shell, <em>but no spark.</em>
      </h1>
      <p>
        The page you sought does not exist, or has forgotten what it was for.
      </p>
      <Link href="/">Return to the inquiry</Link>
    </main>
  );
}
