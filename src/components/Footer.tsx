import { Mail, Phone, Linkedin } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Column 1: Name + description */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Alba Patricia Casas González
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Digital Marketing Strategist passionate about creating impactful
            content strategies that drive business growth and meaningful
            audience connections.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-700 text-center">
        <p className="text-gray-500">
          &copy; 2025 Alba Patricia Casas González. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
