import { PenLine, UploadCloud, Share2 } from "lucide-react";

const steps = [
  {
    title: "Write or record",
    desc: "Jot down your story or record your voice. Add background music in one tap.",
    icon: PenLine,
  },
  {
    title: "Add visuals",
    desc: "Pick a cover, sprinkle art, and set the mood with themes.",
    icon: UploadCloud,
  },
  {
    title: "Share and grow",
    desc: "Publish to your feed, share a link, and build your audience.",
    icon: Share2,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">How it works</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2">
            Create beautiful narrative moments in three simple steps.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-fuchsia-500/20">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{desc}</p>
            </div>
          ))}
        </div>

        <div id="join" className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 shadow-lg shadow-pink-600/30 hover:shadow-pink-600/40 transition-all"
          >
            Start your first Kahani now
          </a>
          <p className="text-xs text-neutral-500 mt-3">It’s free to begin. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
