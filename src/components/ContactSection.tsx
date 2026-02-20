"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 text-white"
      style={{
        background: "linear-gradient(135deg, #7e22ce, #9333ea, #6b21a8)",
      }}
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
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-6">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-purple-200 text-sm">Email</p>
                  <p className="font-medium">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-purple-200 text-sm">Phone</p>
                  <p className="font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-purple-200 text-sm">Location</p>
                  <p className="font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>

              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-purple-200 text-sm">LinkedIn</p>
                  <p className="font-medium">Alba Patricia Casas González</p>
                </div>
              </a>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white/40 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white/40 transition-colors"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white/40 transition-colors"
              />
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-purple-300 focus:outline-none focus:border-white/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-purple-700 font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
