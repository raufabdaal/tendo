import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="eyebrow">404</div>
      <h1>Page not found</h1>
      <p className="lead">Try returning home and choosing a subject again.</p>
      <Link href="/" className="btn btn-primary">Back home</Link>
    </div>
  );
}
