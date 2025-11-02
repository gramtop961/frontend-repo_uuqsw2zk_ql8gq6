import { Rocket, Feather } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-20%,rgba(236,72,153,0.35),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(99,102,241,0.35),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300 ring-1 ring-inset ring-black/5 dark:ring-white/10">
              New • Create immersive stories in minutes
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-fuchsia-700 to-indigo-700 dark:from-white dark:via-fuchsia-300 dark:to-indigo-300">
              Ride the rails of imagination with Kahani Express
            </h1>
            <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              Craft bite-sized audio and visual tales, share with friends, and explore a world of stories curated for your mood and time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/40 transition-all"
              >
                <Rocket size={18} />
                Get Started
              </a>
              <a
                href="#stories"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur hover:bg-white dark:hover:bg-neutral-900 transition-colors"
              >
                <Feather size={18} />
                Browse Stories
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/100?img=5" alt="user" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/100?img=12" alt="user" />
                <img className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://i.pravatar.cc/100?img=22" alt="user" />
              </div>
              <p>Trusted by 10k+ storytellers</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-indigo-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur overflow-hidden">
                <div className="h-full grid grid-rows-6">
                  <div className="row-span-4 p-4 bg-gradient-to-b from-neutral-50/60 to-transparent dark:from-neutral-800/40">
                    <div className="h-full rounded-xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 flex items-center justify-center text-center px-6">
                      <p className="text-neutral-700 dark:text-neutral-300">
                        Your story canvas — mix narration, music, and visuals.
                      </p>
                    </div>
                  </div>
                  <div className="row-span-2 p-4 grid grid-cols-3 gap-3">
                    {["Mystery", "Romance", "Sci‑Fi", "Folklore", "Thriller", "Kids"].map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10 text-center"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-3xl bg-fuchsia-500/20 blur-2xl" />
            <div className="absolute -top-4 -right-6 w-28 h-28 rounded-3xl bg-indigo-500/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
