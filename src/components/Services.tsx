import { motion } from "framer-motion";
import { tools, services } from "../data";
import { Palette, Sparkles, Newspaper, Package, Keyboard, Globe } from "./icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  Sparkles,
  Newspaper,
  Package,
  Keyboard,
  Globe,
};

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900/50"
      />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            What I can help with
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From creative design to practical computer services — I offer a full
            range of solutions for businesses, students, and individuals.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gray-400 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white shadow-lg dark:bg-white dark:text-gray-900">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tools */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Tools & equipment
          </motion.h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <h4 className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  {group.category}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
