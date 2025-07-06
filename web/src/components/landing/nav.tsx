"use client"

import React, { useState } from 'react'
import { ModeToggle } from '../ui/theme-toggle'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from '@/assets/images/nft.png'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-3 w-full border-b bg-white/10 dark:bg-zinc-900/10 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src={logo}
            alt='Logo'
            className='size-[3rem]'
          />
        <div className="text-2xl hidden lg:block font-extrabold font-orbitron text-primary-500 uppercase select-none">
          VentureVerse
        </div>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex hidden items-center justify-center gap-8">
          <Link
            href="/"
            className="text-sm font-orbitron text-primary-500 hover:underline hover:text-purple-400 transition-all duration-300 uppercase"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-orbitron text-primary-500 hover:underline hover:text-purple-400 transition-all duration-300 uppercase"
          >
            About
          </Link>
          <Link
            href="/nft"
            className="text-sm font-orbitron text-primary-500 hover:underline hover:text-purple-400 transition-all duration-300 uppercase"
            >
            NFT
          </Link>
          {/* Mode toggle */}
          <ModeToggle />
          <Link
            href="/sign-in"
            >
            <Button
            variant="outline"
            // style={{
            //   clipPath:
            //   'polygon(0 0, 50% 0, 75% 20%, 85% 20%, 90% 0, 100% 0, 100% 100%, 0 100%)',
            // }}
            className="transition-all duration-300 uppercase ml-4 border-primary-500 text-primary-500 hover:bg-primary/10 hover:text-primary-500 hover:border-2 hover:border-primary-500"
            >
            Sign in
            </Button>
            </Link>

              <Link
                href="/sign-up"
                >
          <Button
            // style={{
            //   clipPath:
            //     'polygon(0 0, 50% 0, 75% 20%, 85% 20%, 90% 0, 100% 0, 100% 100%, 0 100%)',
            // }}
            className="transition-all duration-300 uppercase hover:bg-primary/10 hover:text-primary-500 hover:border-2 hover:border-primary-500"
          >
            Sign up
          </Button>
          </Link>
        </div>


        {/* Mobile Hamburger */}
        <Button
          variant="ghost"
          onClick={toggleMenu}
          className="p-2 bg-white/10 dark:bg-zinc-800/20 backdrop-blur-md border border-white/20 dark:border-zinc-700 rounded-xl lg:hidden ml-4"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X className="text-zinc-900 dark:text-zinc-100 w-5 h-5" />
          ) : (
            <Menu className="text-zinc-900 dark:text-zinc-100 w-5 h-5" />
          )}
        </Button>
      </nav>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-xs bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col mt-20 px-6 space-y-6 text-lg font-semibold uppercase text-primary-600 dark:text-primary-400">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-500">
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-purple-500">
            About
          </Link>
          <Link href="/nft" onClick={() => setMenuOpen(false)} className="hover:text-purple-500">
            NFT
          </Link>
          <Button
            onClick={() => setMenuOpen(false)}
            style={{
              clipPath:
                'polygon(0 0, 50% 0, 75% 20%, 85% 20%, 90% 0, 100% 0, 100% 100%, 0 100%)',
            }}
            className="uppercase mt-4 hover:bg-primary/10 hover:text-primary-500 hover:border-2 hover:border-primary-500"
          >
            Connect Wallet
          </Button>
        </nav>
      </div>

      {/* Overlay behind menu */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        />
      )}
    </>
  )
}

export default Nav
