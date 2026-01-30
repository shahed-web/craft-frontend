"use client"

import Link from "next/link"
import { memo } from "react"
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaInstagram,
} from "react-icons/fa"

const Topbar = () => {
  return (
    <div className="hidden md:block bg-gradient-to-r from-green-700 to-green-600 text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 py-2 flex items-center justify-between">
        
        {/* Left: Contact Info */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-green-200 transition"
          >
            <FaPhone className="text-[11px]" />
            <span>+123-456-7890</span>
          </a>

          <a
            href="mailto:contact@benubon.com"
            className="flex items-center gap-2 hover:text-green-200 transition"
          >
            <FaEnvelope className="text-[11px]" />
            <span>contact@benubon.com</span>
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] opacity-90">Follow us:</span>

          <SocialLink href="/" label="Facebook">
            <FaFacebookF />
          </SocialLink>

          <SocialLink href="/" label="Instagram">
            <FaInstagram />
          </SocialLink>

          <SocialLink href="/" label="LinkedIn">
            <FaLinkedinIn />
          </SocialLink>
        </div>
      </div>
    </div>
  )
}

/* Reusable Social Icon */
const SocialLink = ({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    aria-label={label}
    className="hover:text-green-200 transition text-sm"
  >
    {children}
  </Link>
)

export default memo(Topbar)
