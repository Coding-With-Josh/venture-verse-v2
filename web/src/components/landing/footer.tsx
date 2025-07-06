import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  X as XIcon,
  Youtube,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/josh_scriptz",
    icon: <XIcon className="w-6 h-6" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/CHANNEL_ID",
    icon: <Youtube className="w-6 h-6" />,
  },
//   {
//     name: "Telegram",
//     href: "https://t.me/ventureverse",
//     icon: <Telegram className="w-6 h-6" />,
//   },
//   {
//     name: "Discord",
//     href: "https://discord.gg/ventureverse",
//     icon: <Discord className="w-6 h-6" />,
//   },
];

const Footer = () => {
  return (
    <footer className="min-w-screen bg-background/20 backdrop-blur-xl border-t border-zinc-300/10 text-zinc-900 dark:text-zinc-200 py-16 px-8 md:px-20 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            VentureVerse
          </h3>
          <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-300">
            Dive into the future of crypto with VentureVerse. Join our
            community, explore exclusive NFTs, and stay ahead in the Web3
            ecosystem.
          </p>
          {/* <Button
            className="mt-2 bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => window.open("https://x.com/josh_scriptz", "_blank")}
          >
            Follow us on X
          </Button> */}
        </div>

        {/* Quick Links */}
        <nav className="space-y-2 text-sm">
          <h3 className="text-lg font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Quick Links
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/nft"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                NFTs
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className="hover:text-purple-600 transition-colors duration-300"
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Connect With Us
          </h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit VentureVerse ${name}`}
                className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 transition-colors duration-300"
              >
                <GlowingEffect
                  spread={20}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                >
                  {icon}
                </GlowingEffect>
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs text-zinc-600 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} VentureVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
