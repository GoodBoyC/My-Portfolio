import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="work" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Recent projects
            </h2>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-400">
            Real client work. Each design was created to solve a specific problem
            and deliver exactly what the client needed.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setSelected(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:shadow-black/40"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${p.accent} opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20`}
                />
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg backdrop-blur transition group-hover:bg-white">
                  <ArrowUpRight size={16} />
                </div>
                <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur">
                  {p.category}
                </div>
              </div>

              {/* Meta */}
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {p.client}
                  </span>
                  <span className="text-xs text-gray-400">{p.year}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {p.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 md:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    {projects[selected].category} · {projects[selected].year}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">
                    {projects[selected].title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Client: {projects[selected].client}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X size={20} />
                </button>
              </div>

              <img
                src={projects[selected].image}
                alt={projects[selected].title}
                className="mt-6 w-full rounded-2xl object-cover"
              />

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                    Overview
                  </h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {projects[selected].description}
                  </p>
                </div>

                {projects[selected].story && (
                  <>
                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-800">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                        The Story
                      </h4>
                      <div className="mt-3 space-y-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            The Problem
                          </p>
                          <p className="mt-1 text-gray-700 dark:text-gray-300">
                            {projects[selected].story!.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            The Solution
                          </p>
                          <p className="mt-1 text-gray-700 dark:text-gray-300">
                            {projects[selected].story!.solution}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Design Thinking
                          </p>
                          <p className="mt-1 text-gray-700 dark:text-gray-300">
                            {projects[selected].story!.designThinking}
                          </p>
                        </div>
                      </div>
                    </div>

                    {projects[selected].story!.clientNote && (
                      <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-800">
                        <CheckCircle
                          size={20}
                          className="mt-0.5 text-gray-600 dark:text-gray-400"
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Client Outcome
                          </p>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            {projects[selected].story!.clientNote}
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
