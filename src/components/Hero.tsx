import { ArrowDown, MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Decorative gradients - vintage grey tones */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gray-400/10 blur-[120px] dark:bg-gray-600/10" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-gray-300/10 blur-[100px] dark:bg-gray-700/10" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gray-500/10 blur-[100px] dark:bg-gray-800/10" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs text-gray-700 backdrop-blur dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-500" />
          </span>
          Available for freelance projects & collaborations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl dark:text-white"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent dark:from-gray-300 dark:via-white dark:to-gray-100">
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-gray-700 sm:text-2xl dark:text-gray-300"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400"
        >
          {personal.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-gray-900/20 transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:shadow-white/10 dark:hover:bg-gray-200"
          >
            View my work
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 backdrop-blur transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
          >
            Start a project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 text-gray-600 dark:text-gray-400"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 text-sm transition hover:text-gray-900 dark:hover:text-white"
          >
            <Mail size={16} /> {personal.email}
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm transition hover:text-gray-900 dark:hover:text-white"
          >
            <Phone size={16} /> {personal.phone}
          </a>
          <span className="flex items-center gap-2 text-sm">
            <MapPin size={16} /> {personal.location}
          </span>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 inline-flex animate-bounce flex-col items-center text-xs text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-300"
        >
          <span>Scroll</span>
          <ArrowDown size={16} className="mt-1" />
        </motion.a>
      </div>
    </section>
  );
}
