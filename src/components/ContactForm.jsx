"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const endpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/mojzbgkv";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.[0]?.message ||
          data?.message ||
          "Message failed. Check the form endpoint or try again.";

        throw new Error(message);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[#dfcfb5] bg-[#fffaf2] p-5 shadow-[0_18px_60px_rgba(79,58,32,0.07)] md:p-7"
    >
      <input type="hidden" name="_subject" value="New message from portfolio" />

      <div className="grid gap-4">
        <div>
          <label
            htmlFor="name"
            className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-[#dfcfb5] bg-[#f8f3ea] px-4 py-3 text-sm font-bold text-[#262017] outline-none transition placeholder:text-[#9a8a73] focus:border-[#53756c] focus:bg-[#fffaf2]"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="mt-2 w-full rounded-2xl border border-[#dfcfb5] bg-[#f8f3ea] px-4 py-3 text-sm font-bold text-[#262017] outline-none transition placeholder:text-[#9a8a73] focus:border-[#53756c] focus:bg-[#fffaf2]"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-xs font-black uppercase tracking-[0.18em] text-[#53756c]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell me about your project or idea..."
            className="mt-2 w-full resize-none rounded-2xl border border-[#dfcfb5] bg-[#f8f3ea] px-4 py-3 text-sm font-bold text-[#262017] outline-none transition placeholder:text-[#9a8a73] focus:border-[#53756c] focus:bg-[#fffaf2]"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#262017] px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
        <FaPaperPlane />
      </button>

      {status === "success" && (
        <p className="mt-5 rounded-2xl border border-[#bcd8c9] bg-[#edf8f1] px-4 py-3 text-center text-sm font-black text-[#477062]">
          Message sent. Thanks for reaching out.
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 rounded-2xl border border-[#e7b4a5] bg-[#fff0ec] px-4 py-3 text-center text-sm font-black text-[#b6533c]">
          {errorMessage}
        </p>
      )}
    </form>
  );
}