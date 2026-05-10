import { Link } from "wouter";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="font-serif text-5xl font-light tracking-tight mb-4">Contact</h1>
      <Link href="/">
        <span className="text-white/40 text-sm tracking-widest uppercase hover:text-white/70 transition-colors">
          &larr; Back
        </span>
      </Link>
    </div>
  );
}
