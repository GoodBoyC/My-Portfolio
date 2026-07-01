import { motion } from "framer-motion";
import { personal } from "../data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Design with purpose
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg leading-relaxed text-gray-700 md:col-span-3 dark:text-gray-300"
          >
            <p>{personal.summary}</p>
            <p className="mt-4">
              My strength lies in translating ideas into visuals that resonate.
              Whether it's a logo that captures a brand's essence, a flyer that
              drives action, or social content that sparks conversation — I
              approach every project with intention and craft.
            </p>
            <p className="mt-4">
              I believe good design is invisible — it works so well that people
              don't notice it, they just notice the results. That's what I strive
              to deliver for every client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-6 backdrop-blur md:col-span-2 dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
              What I bring to every project
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>Clear communication & collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>Attention to detail & craft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>Deadline-driven reliability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>Strategic thinking & problem-solving</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
