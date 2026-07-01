import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Where I've worked
          </h2>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gray-400 via-gray-300 to-transparent md:block dark:from-gray-600 dark:via-gray-700" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative rounded-2xl border border-gray-200 bg-white p-6 md:ml-12 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute -left-[52px] top-6 hidden h-3 w-3 rounded-full bg-gray-400 ring-4 ring-gray-400/20 md:block dark:bg-gray-600 dark:ring-gray-600/20" />

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Palette size={14} /> {job.company}
                    </p>
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300">
                    {job.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
