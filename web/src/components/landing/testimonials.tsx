import React from 'react'
import { Separator } from '../ui/separator'
import { AnimatedTestimonials } from '../ui/animated-testimonials'

import avatarOne from "@/assets/images/avatar-one.jpg"
import avatarTwo from "@/assets/images/avatar-two.jpg"
import avatarThree from "@/assets/images/avatar-three.jpg"

const testimonials = [
  {
    quote:
      "VentureVerse changed my approach to crypto! Their team helped me navigate airdrops effectively and provided great community support.",
    name: "Mark Jackson",
    designation: "Crypto Enthusiast",
    src: avatarOne,
  },
  {
    quote:
      "I’m grateful for VentureVerse’s support. Their insights helped me find amazing opportunities as an airdrop hunter.",
    name: "Anna Smith",
    designation: "Airdrop Hunter",
    src: avatarTwo,
  },
  {
    quote:
      "As a crypto newbie, VentureVerse guided me every step and helped me secure multiple airdrops with confidence.",
    name: "John Champion",
    designation: "Crypto Newbie",
    src: avatarThree,
  },
  {
    quote:
      "VentureVerse’s resources made it simple to stay updated with the latest crypto airdrops and trends.",
    name: "Lisa Park",
    designation: "Blockchain Enthusiast",
    src: avatarTwo,
  },
  {
    quote:
      "The community and guidance from VentureVerse boosted my crypto journey with real, actionable info.",
    name: "David Lee",
    designation: "DeFi Investor",
    src: avatarOne,
  },
]

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Separator className="mx-[7rem] h-1 bg-gradient-to-r from-zinc-200/5 via-zinc-200/20 to-zinc-200/5 mt-16 mb-8" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 uppercase tracking-tight">
        Community {' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Feedback
        </span>
      </h2>

      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  )
}

export default Testimonials
