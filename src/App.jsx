import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryShowcase from "./components/StoryShowcase";
import HowItWorks from "./components/HowItWorks";

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Kahani Express. All rights reserved.
        </p>
        <div className="text-sm text-neutral-500 flex items-center gap-4">
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300">Privacy</a>
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300">Terms</a>
          <a href="#" className="hover:text-neutral-800 dark:hover:text-neutral-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <Hero />
      <StoryShowcase />
      <HowItWorks />
      <Footer />
    </div>
  );
}
