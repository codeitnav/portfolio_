"use client";

import { useState } from "react";
import WaveLine from "../ui/WaveLine";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-background text-foreground">
      <div
        className="

          max-w-7xl mx-auto 
          px-8 sm:px-6 lg:px-8
          flex flex-col justify-center
          pb-24
          pt-12
        "
      >
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          Let&apos;s connect.
          <div className="w-3/4 sm:w-[400px] mt-2 mx-auto">
            <WaveLine />
          </div>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto w-full space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-foreground/30 rounded-md focus:outline-none focus:border-foreground"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-foreground/30 rounded-md focus:outline-none focus:border-foreground"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-foreground/30 rounded-md focus:outline-none focus:border-foreground"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-transparent border border-foreground/30 rounded-md focus:outline-none focus:border-foreground resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-md font-semibold
              bg-foreground text-background
              hover:opacity-90 transition
              disabled:opacity-60
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-600">
              Message sent successfully.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;