"use client";

import { useState } from "react";
import { Phone, MapPin, Linkedin, Send, LucideIcon } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";
import { GRADIENTS } from "@/lib/gradients";

const INPUT_CLASS =
  "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white/40 transition-colors";

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-purple-200 text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {content}
    </a>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xnjbgeag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 text-white"
      style={{ background: GRADIENTS.purpleDark }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work <span className="text-pink-300">Together</span>
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Let&apos;s
            connect and discuss how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="flex flex-col gap-10 md:pt-4">
              <ContactLink
                icon={Phone}
                label="Phone"
                value={CONTACT_INFO.phone}
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              />
              <ContactLink
                icon={MapPin}
                label="Location"
                value={CONTACT_INFO.location}
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value="Alba Patricia Casas González"
                href={CONTACT_INFO.linkedin}
                external
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} className={INPUT_CLASS} />
              <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className={INPUT_CLASS} />
              <input type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={handleChange} className={INPUT_CLASS} />
              <textarea name="message" placeholder="Message" required rows={4} value={formData.message} onChange={handleChange} className={`${INPUT_CLASS} resize-none`} />
              {status === "success" ? (
                <p className="w-full py-3 rounded-lg bg-green-500 text-white font-semibold text-center">
                  ✓ Message sent successfully
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              )}
              {status === "error" && (
                <p className="text-red-300 text-sm text-center">
                  Error sending message. Please try again.
                </p>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
