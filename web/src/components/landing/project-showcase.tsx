"use client"

import { useState } from 'react'
import ProjectSlide from './project-slide'

const ProjectsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: '1',
      name: 'Arch Protocol',
      description: 'The complete Solana development platform for builders',
      demoImage: 'https://images.unsplash.com/photo-1626785774573-4b799315345d',
      discordUrl: 'https://discord.gg/arch',
      getStartedUrl: 'https://arch.xyz/get-started'
    },
    {
      id: '2',
      name: 'Nova Network',
      description: 'Scalable blockchain infrastructure for web3 applications',
      demoImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
      discordUrl: 'https://discord.gg/nova',
      getStartedUrl: 'https://nova.network'
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <ProjectSlide 
      projects={projects}
      currentIndex={currentIndex}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  )
}

export default ProjectsShowcase