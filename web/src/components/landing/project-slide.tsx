import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: string
  name: string
  description: string
  demoImage: string
  discordUrl: string
  getStartedUrl: string
}

const slideVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
    scale: 0.98,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 60, damping: 20 }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
    scale: 0.98,
    transition: { duration: 0.25 }
  }),
}

const ProjectSlide = ({ 
  projects, 
  autoSlideInterval = 2000 
}: {
  projects: Project[]
  autoSlideInterval?: number
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
    resetAutoSlide()
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
    resetAutoSlide()
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    resetAutoSlide()
  }

  const resetAutoSlide = () => {
    setIsAutoSliding(false)
    setTimeout(() => setIsAutoSliding(true), autoSlideInterval)
  }

  useEffect(() => {
    if (!isAutoSliding) return
    
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
    // eslint-disable-next-line
  }, [isAutoSliding, autoSlideInterval])

  const project = projects[currentIndex]

  return (
    <div className="relative w-full h-[40rem] overflow-hidden group">
      <AnimatePresence custom={direction} mode="wait">
        {/* Background Image - Dimmed */}
        <motion.div
          key={project.id + '-bg'}
          className="absolute inset-0 z-0"
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src={project.demoImage}
            alt={`${project.name} background`}
            fill
            className="object-cover brightness-30"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={project.id + '-content'}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            {/* Project Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              {project.name}
            </h1>

            {/* Project Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 md:mb-12 px-4">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                asChild
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg bg-white text-black hover:bg-white/90 transition-all"
              >
                <a href={project.getStartedUrl} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-muted hover:text-white text-white bg-white-5 hover:bg-white/10 transition-all"
              >
                <a href={project.discordUrl} target="_blank" rel="noopener noreferrer">
                  Join Discord
                </a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Side */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous project"
        >
          <ChevronLeft className="text-white h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next project"
        >
          <ChevronRight className="text-white h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectSlide