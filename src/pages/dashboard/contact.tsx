"use client";

import { useState } from "react";
import DashboardLayout from "../../components/dashboardlayout";

export default function ContactFrankiePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  }

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4">Contact Frankie</h1>
      <p className="text-[#6B6B6B] mb-6 text-sm">
        Need a hand? Have a question? We’re here to help. Send us a message and a real human will get back to you within 24 hours.
      </p>

      {submitted ? (
        <div className="bg-white border border-[#EBD8C3] p-6 rounded-xl text-sm text-[#2B2B2B]">
          <p className="font-semibold mb-2">Thanks for reaching out!</p>
          <p>We’ve received your message and will get back to you soon. Check your inbox (and maybe your spam folder just in case).</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Tell us what’s on your mind..."
            />
          </div>

          <button
            type="submit"
            className="bg-[#E94B4B] text-white px-6 py-2 rounded-full shadow hover:bg-red-500"
          >
            Send Message
          </button>
        </form>
      )}
    </DashboardLayout>
  );
}
