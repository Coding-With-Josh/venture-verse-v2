import React from 'react'
import { Separator } from '../ui/separator'
import { MessageSquare, Globe, Users, TrendingUp, MessageCircle } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Features = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <Separator className="mx-[7rem] h-1 bg-gradient-to-r from-zinc-200/5 via-zinc-200/20 to-zinc-200/5 mt-16 mb-8" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 uppercase tracking-tight">
        What exactly {" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          do we offer?
        </span>
      </h2>
      <div className="relative mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <Feature
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<MessageSquare className="h-6 w-6 text-black dark:text-neutral-400" />}
            title="Get honest, actionable feedback"
            description="Collect detailed user insights to refine and grow your project."
          />

          <Feature
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Globe className="h-6 w-6 text-black dark:text-neutral-400" />}
            title="Cross-Platform Exposure"
            description="Boost visibility on platforms like X, Medium, Substack, and YouTube."
          />

          <Feature
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Users className="h-6 w-6 text-black dark:text-neutral-400" />}
            title="Real User Acquisition"
            description="Attract engaged users who add real value to your community."
          />

          <Feature
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<TrendingUp className="h-6 w-6 text-black dark:text-neutral-400" />}
            title="Strategic Digital Marketing"
            description="Tailored growth strategies to drive awareness and adoption."
          />

          <Feature
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<MessageCircle className="h-6 w-6 text-black dark:text-neutral-400" />}
            title="Community Development & Management"
            description="Build active communities with tools, events, and expert moderation."
          />
        </ul>
      </div>
    </div>
  )
}

interface FeaturesProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const Feature = ({ area, icon, title, description }: FeaturesProps) => {
  return (
    <li className={`min-h-[14rem] md list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Features;
