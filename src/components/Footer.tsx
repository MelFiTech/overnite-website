'use client';

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

export default function Footer() {
  const socialLinks = [
    { href: "https://instagram.com/vernite", icon: faInstagram, label: "Instagram" },
    { href: "https://youtube.com/vernite", icon: faYoutube, label: "YouTube" },
    { href: "https://facebook.com/vernite", icon: faFacebook, label: "Facebook" },
    { href: "https://twitter.com/vernite", icon: faTwitter, label: "Twitter" },
    { href: "https://tiktok.com/@vernite", icon: faTiktok, label: "TikTok" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          {/* Left Section */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-sm font-medium tracking-wider uppercase">ABOUT</h3>
            <nav className="flex flex-col gap-3 sm:gap-4">
              <a href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <a href="/education" className="text-white/80 hover:text-white transition-colors">
                Students & Educators
              </a>
            </nav>
          </div>

          {/* Right Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col gap-6 sm:gap-8">
              <Image
                src="/overnite-logo.png"
                alt="Vernite Website"
                width={168}
                height={46}
                className="w-[140px] sm:w-[168px] h-auto"
              />
              <p className="text-white/80 max-w-md text-sm sm:text-base">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon 
                    icon={social.icon}
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 sm:gap-6 text-sm">
              <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                Terms of use
              </a>
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                Privacy policy
              </a>
            </div>
            <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Overnite.Website - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}