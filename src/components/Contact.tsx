import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageSquare } from "lucide-react";
import { personal } from "../data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900/50"
      />
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium uppercase tracking-widest text-gray-600 dark:text-gray-400">
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Let's create something great
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Have a project in mind? I'm available for freelance work, brand
                design, marketing materials, and ongoing creative partnerships.
                Let's discuss how we can bring your vision to life.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600"
                >
                  <Mail size={18} />
                  <span className="text-sm">{personal.email}</span>
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600"
                >
                  <Phone size={18} />
                  <span className="text-sm">{personal.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${personal.phone.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600"
                >
                  <MessageSquare size={18} />
                  <span className="text-sm">Chat on WhatsApp</span>
                </a>
              </div>

              <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                Based in Port Harcourt, Nigeria · Available for remote work
                worldwide
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Tell me about your project
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-gray-400 dark:border-gray-800 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  placeholder="What are we creating together?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                {status === "sent" ? (
                  <>Thanks! I'll get back to you soon.</>
                ) : (
                  <>
                    Send message <Send size={14} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
