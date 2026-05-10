import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <p className="font-serif text-8xl font-light text-white/20 mb-6">404</p>
      <Link href="/">
        <span className="text-white/40 text-sm tracking-widest uppercase hover:text-white/70 transition-colors">
          &larr; Home
        </span>
      </Link>
    </div>
  );
}
