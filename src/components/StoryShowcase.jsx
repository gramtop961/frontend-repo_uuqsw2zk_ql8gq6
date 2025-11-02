import { Play, Headphones, Clock } from "lucide-react";

const demoStories = [
  {
    id: 1,
    title: "The Midnight Train",
    author: "Aisha Khan",
    length: "6 min",
    mood: "Mystery",
    cover:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Letters to the Moon",
    author: "Kabir Sen",
    length: "10 min",
    mood: "Romance",
    cover:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Circuit Dreams",
    author: "Riya Patel",
    length: "8 min",
    mood: "Sci‑Fi",
    cover:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Echoes of the Bazaar",
    author: "Imran Ali",
    length: "12 min",
    mood: "Folklore",
    cover:
      "https://images.unsplash.com/photo-1578923439732-3316894200a1?q=80&w=1600&auto=format&fit=crop",
  },
];

function StoryCard({ story }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={story.cover}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-black/5 dark:border-white/10">
            {story.mood}
          </span>
          <span className="inline-flex items-center text-xs text-neutral-600 dark:text-neutral-300 gap-1">
            <Clock size={14} />
            {story.length}
          </span>
        </div>
        <h3 className="mt-3 font-semibold text-neutral-900 dark:text-white tracking-tight">
          {story.title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">by {story.author}</p>

        <div className="mt-4 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-neutral-900 dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/20 border border-black/5 dark:border-white/10">
            <Play size={16} />
            Play
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/60">
            <Headphones size={16} />
            Listen later
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

export default function StoryShowcase() {
  return (
    <section id="stories" className="py-16 md:py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Popular on Kahani Express</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mt-1">Hand-picked tales for your next ride.</p>
          </div>
          <a href="#" className="text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700">See all</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {demoStories.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
