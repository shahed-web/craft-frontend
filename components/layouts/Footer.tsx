import Link from "next/link";
import React from "react";

/* ---------------- Data ---------------- */

const footerLinks = [
  {
    title: "Company Info",
    links: [
      { label: "About Benubon", href: "/" },
      { label: "Social Responsibility", href: "/" },
      { label: "Blogs", href: "/" },
    ],
  },
  {
    title: "Help & Support",
    links: [
      { label: "Order Policy", href: "/" },
      { label: "Shipping Info", href: "/" },
      { label: "Size Chart", href: "/" },
    ],
  },
  {
    title: "Customer Support",
    links: [
      { label: "Contact Us", href: "/" },
      { label: "Notices", href: "/" },
    ],
  },
];

/* ---------------- Footer ---------------- */

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF7EF] px-6 py-14 text-sm">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h1 className="font-arsenal text-4xl text-green-800">
              Handicraft
            </h1>
            <p className="mt-3 max-w-xs text-[#82705D]">
              Sustainable handmade products crafted with care for people and
              the planet.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-green-800">
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        text-[#2C1A00]/80 transition
                        hover:text-green-700
                        focus:outline-none focus:ring-2 focus:ring-green-700/30
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-green-800/20" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
          <p className="text-[#2C1A00]/70">
            © {new Date().getFullYear()} Benubon Crafts. All rights reserved.
          </p>

          {/* Placeholder for future links */}
          <div className="flex gap-4 text-[#2C1A00]/70">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
