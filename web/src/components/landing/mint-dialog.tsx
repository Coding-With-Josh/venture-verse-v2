"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const steps = [
  {
    id: "x1",
    label: "Follow @Venture_Verse_ on X",
    url: "https://x.com/Venture_Verse_",
  },
  {
    id: "x2",
    label: "Follow @senator_sammy_ on X",
    url: "https://x.com/senator_sammy_",
  },
  {
    id: "x3",
    label: "Like, comment & Retweet this post",
    url: "https://x.com/Venture_Verse_/status/1894298820659363914",
  },
  {
    id: "yt",
    label: "Subscribe to our YouTube channel",
    url: "https://www.youtube.com/@ventureverse-s7m",
  },
  {
    id: "tg",
    label: "Join our Telegram Channel",
    url: "https://t.me/versus_verse",
  },
  {
    id: "ss",
    label: "Follow our Substack page",
    url: "https://substack.com/@ventureverse0",
  },
];

export function MintDialog() {
  // Initialize completed state for each step
  const [completed, setCompleted] = useState<Record<string, boolean>>(
    Object.fromEntries(steps.map(step => [step.id, false]))
  );

  // Track opened windows for each step
  const [openedWindows, setOpenedWindows] = useState<Record<string, Window | null>>(
    Object.fromEntries(steps.map(step => [step.id, null]))
  );

  // Check if windows are closed
  useEffect(() => {
    const interval = setInterval(() => {
      steps.forEach(step => {
        if (openedWindows[step.id] && openedWindows[step.id]?.closed) {
          setCompleted(prev => ({ ...prev, [step.id]: true }));
          setOpenedWindows(prev => ({ ...prev, [step.id]: null }));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [openedWindows]);

  const handleLinkClick = (id: string) => {
    const step = steps.find(s => s.id === id);
    if (!step) return;

    // Open the link in a new window
    const newWindow = window.open(step.url, '_blank');
    setOpenedWindows(prev => ({ ...prev, [id]: newWindow }));
  };

  const allCompleted = Object.values(completed).every(Boolean);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Mint Now
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit">
        <DialogHeader>
          <DialogTitle>Mint NFT</DialogTitle>
          <DialogDescription>Complete these steps to mint this free NFT.</DialogDescription>
        </DialogHeader>

        {/* Step Indicator */}
        <div className="flex justify-between mb-6">
          {steps.map(({ id }) => (
            <div
              key={id}
              className={`flex-1 h-1 mx-1 rounded ${
                completed[id] ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-700"
              }`}
              style={{ transition: "background-color 0.3s ease" }}
            />
          ))}
        </div>

        {/* Steps List */}
        <div className="space-y-4">
          {steps.map(({ id, label, url }) => (
            <div
              key={id}
              className="flex items-center justify-between border rounded-md p-3"
            >
              <div>
                <p className="font-medium">{label}</p>
                <button
                  onClick={() => handleLinkClick(id)}
                  className="text-sm text-purple-600 underline cursor-pointer"
                >
                  {url}
                </button>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Checkbox
                        checked={completed[id]}
                        onCheckedChange={() => {
                          if (!completed[id]) {
                            alert("You think you're sleek? Complete the task properly!");
                          }
                        }}
                        className="w-5 h-5 text-purple-600"
                        disabled={!completed[id]}
                      />
                    </div>
                  </TooltipTrigger>
                  {!completed[id] && (
                    <TooltipContent>
                      <p>You think you're sleek?</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>

        <DialogFooter className="sm:justify-start mt-6">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className="mr-2">
              Close
            </Button>
          </DialogClose>
          <Button
            disabled={!allCompleted}
            className="bg-purple-600 hover:bg-purple-700 text-white"
            onClick={() => alert("Minting...")}
          >
            Mint NFT
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}