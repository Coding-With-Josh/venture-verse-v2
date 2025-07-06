import React from 'react'
import { Separator } from '../ui/separator'

const WhatIs = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Separator className="mx-[7rem] h-1 bg-gradient-to-r from-zinc-200/5 via-zinc-200/20 to-zinc-200/5 mt-16 mb-8" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 uppercase tracking-tight">
        What is {" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          VentureVerse ?
        </span>

      </h2>
      <p className="text-xs lg:text-sm max-w-3xl mx-auto text-center mt-6 text-zinc-900 dark:text-zinc-300/80 leading-relaxed">
        <span className="font-bold">VentureVerse</span> is a community-driven Web3 marketing and content agency that helps projects grow through real users, value-focused campaigns, and quality content. We focus on creating engaging social media content, educational tutorials, and storytelling on platforms like YouTube, TikTok, LinkedIn, Threads, and X.
        <span className="block mt-4">
          Our goal is to connect Web3 projects with the right audience by combining creative strategy, genuine community feedback, and real engagement.
        </span>
        <span className="block mt-4">
          <span className="font-bold">VentureVerse</span> isn’t just about marketing Web3; we’re building a movement that moves it forward.
        </span>
      </p>

    </div>
  )
}

export default WhatIs