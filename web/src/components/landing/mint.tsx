import React from 'react'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import { MintDialog } from './mint-dialog'
import mintImage from "@/assets/images/nft.png"

const Mint = () => {
  return (
    <div className="flex flex-col w-full mb-12 items-center px-4 sm:px-6 lg:px-8">
      <Separator className="mx-auto max-w-7xl h-1 bg-gradient-to-r from-zinc-200/5 via-zinc-200/20 to-zinc-200/5 mt-16 mb-8" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-16 uppercase tracking-tight max-w-4xl mx-auto">
        Mint {' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          NFT
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-12 max-w-7xl gap-8">
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <Image
            src={mintImage}
            alt="Mint NFT"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-contain w-full h-auto"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 max-w-xl px-4 lg:px-8">
          <p className="text-center lg:text-left text-sm lg:text-base text-zinc-900 dark:text-zinc-300/80 leading-relaxed mb-6">
            Mint your unique NFT to become a part of the VentureVerse community. Each NFT represents your commitment to the Web3 ecosystem and grants you access to exclusive features, events, and opportunities within our platform.
          </p>
          <div className="flex justify-center lg:justify-start">
            <MintDialog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint
