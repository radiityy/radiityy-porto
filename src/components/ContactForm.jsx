"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_18px_60px_rgba(79,58,32,0.07)] md:p-7"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e7c892]/35 blur-2xl" />
      <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#bcd8c9]/35 blur-2xl" />

      <div className="relative mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8b7658]">
            Message
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-[-0.06em] text-[#262017]">
            Send a note.
          </h2>
        </div>

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#262017] text-white">
          <FaPaperPlane />
        </span>
      </div>

      <div className="relative grid gap-4 sm:grid-cols-2">
        <label>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#7a674f]">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-[#d8c6a8] bg-[#f8f3ea] px-4 py-3 text-sm text-[#262017] outline-none transition placeholder:text-[#a89578] focus:border-[#53756c] focus:bg-[#fffaf2]"
          />
        </label>

        <label>
          <span className="text-xs font-black uppercase tracking-[0.18em] text-[#7a674f]">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="your@email.com"
            className="mt-2 w-full rounded-2xl border border-[#d8c6a8] bg-[#f8f3ea] px-4 py-3 text-sm text-[#262017] outline-none transition placeholder:text-[#a89578] focus:border-[#53756c] focus:bg-[#fffaf2]"
          />
        </label>
      </div>

      <label className="relative mt-4 block">
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#7a674f]">
          Message
        </span>
        <textarea
          required
          name="message"
          rows="6"
          placeholder="Tell me something..."
          className="mt-2 w-full resize-none rounded-2xl border border-[#d8c6a8] bg-[#f8f3ea] px-4 py-3 text-sm leading-7 text-[#262017] outline-none transition placeholder:text-[#a89578] focus:border-[#53756c] focus:bg-[#fffaf2]"
        />
      </label>

      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex="-1"
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#262017] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <FaPaperPlane className="text-xs" />
      </button>

      {status === "success" && (
        <p className="relative mt-4 rounded-2xl border border-[#bcd8c9] bg-[#edf8f1] px-4 py-3 text-center text-sm font-bold text-[#477062]">
          Message sent. Thank you!
        </p>
      )}

      {status === "error" && (
        <p className="relative mt-4 rounded-2xl border border-[#e1b7a8] bg-[#fff0eb] px-4 py-3 text-center text-sm font-bold text-[#b45845]">
          Message failed. Check the form endpoint or try again.
        </p>
      )}
    </form>
  );
}