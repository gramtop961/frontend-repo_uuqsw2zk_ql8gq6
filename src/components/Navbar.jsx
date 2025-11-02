import { Book, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-indigo-500 text-white shadow-md shadow-pink-500/20">
            <Book size={22} />
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold tracking-tight">Kahani Express</p>
            <p className="text-xs text-neutral-500">Stories on the move</p>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#stories" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Stories</a>
          <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition-colors">How it works</a>
          <a href="#join" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Join</a>
        </nav>

        <a
          href="#join"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/40 transition-all"
        >
          <Sparkles size={18} />
          Start Creating
        </a>
      </div>
    </header>
  );
}
