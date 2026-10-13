"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";

type Status = "idle" | "success" | "error";

const EMAIL_RE = /^[^s@]+@[^s@]+.[^s@]+$/;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  // Opens the visitor's email app with the message pre-filled, so every
  // message actually reaches the inbox without needing a mail backend.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message || !EMAIL_RE.test(email)) {
      setStatus("error");
      setFeedback("Please complete all fields with a valid email address.");
      return;
    }

    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}

— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setStatus("success");
    setFeedback(`Your email app should now open with the message ready to send. If it doesn't, email me directly at ${profile.email}.`);
  }

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl text-ink">
            Contact<span className="text-gold">.</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Open to internships, graduate roles, freelance projects and
            collaborations. I usually reply within a day.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-xl border border-line bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md sm:col-span-2"
            >
              <small className="text-xs font-bold uppercase tracking-widest text-muted">Email</small>
              <p className="mt-1 break-all font-display text-base font-bold text-ink">{profile.email}</p>
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="rounded-xl border border-line bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md"
            >
              <small className="text-xs font-bold uppercase tracking-widest text-muted">Phone</small>
              <p className="mt-1 font-display text-base font-bold text-ink">{profile.phone}</p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md"
            >
              <small className="text-xs font-bold uppercase tracking-widest text-muted">LinkedIn</small>
              <p className="mt-1 font-display text-base font-bold text-ink">View Profile</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-line bg-white p-5 shadow-sm transition hover:border-gold hover:shadow-md"
            >
              <small className="text-xs font-bold uppercase tracking-widest text-muted">GitHub</small>
              <p className="mt-1 font-display text-base font-bold text-ink">@SirDyllan</p>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-sm"
        >
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="rounded-xl border border-line bg-cream px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="rounded-xl border border-line bg-cream px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-widest text-muted">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about the opportunity"
              required
              className="resize-none rounded-xl border border-line bg-cream px-4 py-3 font-body text-sm text-ink outline-none transition focus:border-gold"
            />
          </label>

          <motion.button
            type="submit"
                        whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-display text-sm font-bold text-cream transition hover:bg-goldDeep hover:text-ink disabled:opacity-60"
          >
            Send Message <Send size={15} />
          </motion.button>

          {status === "success" && (
            <p className="rounded-lg border border-gold/50 bg-gold/15 px-4 py-3 text-sm text-goldDeep">
              {feedback}
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-600">
              {feedback}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
